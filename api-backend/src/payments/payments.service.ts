import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import {
  PaymentStatus,
  InvoiceStatus,
  SubscriptionStatus,
} from "@prisma/client";
import { FakePaymentsProvider } from "./fake.provider";
import { MAX_ATTEMPTS, backoffMs } from "./payments.constants";

@Injectable()
export class PaymentsService {
  private provider = new FakePaymentsProvider();
  constructor(private readonly prisma: PrismaService) {}

  async chargePayment(paymentId: string) {
    const payment = await this.prisma.payment.findUnique({
      where: { id: paymentId },
      include: { invoice: { include: { subscription: true } } },
    });
    if (!payment) throw new Error("Payment not found");
    if (payment.status !== "PENDING") return payment;

    const now = new Date();
    const res = await this.provider.charge(payment.amountCents, payment.id);

    if (res.status === "succeeded") {
      await this.prisma.$transaction(async (tx) => {
        await tx.payment.update({
          where: { id: payment.id },
          data: {
            status: PaymentStatus.SUCCEEDED,
            providerRef: res.providerRef,
            lastAttemptAt: now,
            nextAttemptAt: null,
            error: null,
          },
        });
        await tx.invoice.update({
          where: { id: payment.invoiceId },
          data: { status: InvoiceStatus.PAID, paidAt: now },
        });
        await tx.subscription.update({
          where: { id: payment.invoice.subscriptionId },
          data: { status: SubscriptionStatus.ACTIVE },
        });
        await tx.outboxEvent.create({
          data: {
            topic: "payment.succeeded",
            payload: { paymentId: payment.id } as any,
          },
        });
      });
    } else {
      const nextAttempt = payment.attempt + 1;
      if (nextAttempt > MAX_ATTEMPTS) {
        await this.compensateFinalFailure(payment.id, res.failureReason);
      } else {
        const nextAt = new Date(Date.now() + backoffMs(nextAttempt));
        await this.prisma.payment.update({
          where: { id: payment.id },
          data: {
            status: PaymentStatus.FAILED,
            attempt: nextAttempt,
            lastAttemptAt: now,
            nextAttemptAt: nextAt,
            error: res.failureReason,
          },
        });
        await this.prisma.outboxEvent.create({
          data: {
            topic: "payment.failed",
            payload: { paymentId: payment.id, attempt: nextAttempt } as any,
          },
        });
      }
    }

    return this.prisma.payment.findUnique({ where: { id: payment.id } });
  }

  private async compensateFinalFailure(paymentId: string, reason: string) {
    await this.prisma.$transaction(async (tx) => {
      const p = await tx.payment.update({
        where: { id: paymentId },
        data: {
          status: PaymentStatus.FAILED,
          lastAttemptAt: new Date(),
          nextAttemptAt: null,
          error: reason,
        },
        include: { invoice: true },
      });

      await tx.invoice.update({
        where: { id: p.invoiceId },
        data: { status: InvoiceStatus.PAST_DUE },
      });

      await tx.subscription.update({
        where: { id: p.invoice.subscriptionId },
        data: { status: SubscriptionStatus.PAST_DUE },
      });

      await tx.outboxEvent.create({
        data: {
          topic: "payment.failed.final",
          payload: { paymentId, reason } as any,
        },
      });
    });
  }

  async reconcile(paymentId: string) {
    const p = await this.prisma.payment.findUnique({
      where: { id: paymentId },
      include: { invoice: true },
    });
    if (!p?.providerRef) return;

    const status = await this.provider.getStatus(p.providerRef);
    if (status === "succeeded" && p.status !== "SUCCEEDED") {
      await this.prisma.$transaction(async (tx) => {
        await tx.payment.update({
          where: { id: p.id },
          data: { status: PaymentStatus.SUCCEEDED, error: null },
        });
        await tx.invoice.update({
          where: { id: p.invoiceId },
          data: { status: InvoiceStatus.PAID, paidAt: new Date() },
        });
        await tx.outboxEvent.create({
          data: {
            topic: "payment.reconciled",
            payload: { paymentId: p.id } as any,
          },
        });
      });
    }
  }
}
