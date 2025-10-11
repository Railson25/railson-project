import { Injectable, ConflictException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PaymentsQueue } from "../payments/payments.queue";

type FakeWebhookPayload =
  | {
      type: "payment.succeeded";
      providerEventId: string;
      data: { paymentId: string; providerRef: string };
    }
  | {
      type: "payment.failed";
      providerEventId: string;
      data: { paymentId: string; reason: string };
    };

@Injectable()
export class WebhooksService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly queue: PaymentsQueue
  ) {}

  async handleFake(payload: FakeWebhookPayload) {
    const exists = await this.prisma.webhookEvent.findUnique({
      where: { providerEventId: payload.providerEventId },
    });

    if (exists) throw new ConflictException("Duplicate webhook");

    await this.prisma.webhookEvent.create({
      data: {
        provider: "fake",
        providerEventId: payload.providerEventId,
        eventType: payload.type,
        payload: payload as any,
        status: "RECEIVED",
      },
    });

    if (payload.type === "payment.succeeded") {
      await this.prisma.payment.update({
        where: { id: payload.data.paymentId },
        data: { providerRef: payload.data.providerRef },
      });

      await this.queue.enqueueReconcile(payload.data.paymentId);
    } else if (payload.type === "payment.failed") {
      await this.prisma.payment.update({
        where: { id: payload.data.paymentId },
        data: { error: payload.data.reason },
      });
    }
    await this.prisma.webhookEvent.update({
      where: { providerEventId: payload.providerEventId },
      data: { status: "PROCESSED", processedAt: new Date() },
    });

    return { ok: true };
  }
}
