import { BadRequestException, Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateSubscriptionDto } from "./dto/create-subscription.dto";
import { InvoiceStatus, SubscriptionStatus } from "@prisma/client";

function periodKeyOff(date: Date) {
  const y = date.getUTCFullYear();
  const m = String(date.getUTCMonth() + 1).padStart(2, "0");

  return `${y}-${m}`;
}

function addOneMonthUTC(d: Date) {
  return new Date(
    Date.UTC(
      d.getFullYear(),
      d.getUTCMonth() + 1,
      d.getUTCDate(),
      d.getUTCHours(),
      d.getUTCMinutes(),
      d.getUTCSeconds(),
      d.getUTCMilliseconds()
    )
  );
}

@Injectable()
export class SubscriptionsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateSubscriptionDto) {
    const plan = await this.prisma.plan.findUnique({
      where: { code: dto.planCode },
    });

    if (!plan || !plan.active) {
      throw new BadRequestException("Invalid or inactive plan");
    }

    const now = new Date();
    const periodKey = periodKeyOff(now);
    const periodEnd = addOneMonthUTC(now);

    return this.prisma.$transaction(async (tx) => {
      const sub = await tx.subscription.create({
        data: {
          customerId: dto.customerId,
          planId: plan.id,
          priceCents: plan.priceCents,
          status: SubscriptionStatus.INCOMPLETE,
          currentPeriodStart: now,
          currentPeriodEnd: periodEnd,
        },
      });

      const invoice = await tx.invoice.create({
        data: {
          subscriptionId: sub.id,
          periodKey,
          amountCents: plan.priceCents,
          status: InvoiceStatus.OPEN,
          dueAt: now,
        },
      });

      return { subscription: sub, firstInvoice: invoice };
    });
  }
}
