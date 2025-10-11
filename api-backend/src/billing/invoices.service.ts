import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { IdempotencyService } from "../common/services/idempotency.service";
import { PaymentStatus } from "@prisma/client";
import { PaymentsQueue } from "../payments/payments.queue";

@Injectable()
export class InvoiceService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly idem: IdempotencyService,
    private readonly queue: PaymentsQueue
  ) {}

  async pay(invoiceId: string, idemKey?: string) {
    const invoice = await this.prisma.invoice.findUnique({
      where: { id: invoiceId },
    });

    if (!invoice) throw new NotFoundException("Invoice not found");
    if (invoice.amountCents <= 0)
      throw new BadRequestException("Invalid amount");

    const reqHash = `invoice:${invoiceId}|amount:${invoice.amountCents}`;

    return this.idem.run(idemKey, reqHash, async () => {
      const payment = await this.prisma.payment.create({
        data: {
          invoiceId: invoice.id,
          amountCents: invoice.amountCents,
          provider: "fake",
          status: PaymentStatus.PENDING,
        },
      });
      await this.queue.enqueueCharge(payment.id);

      return { paymentId: payment.id, status: PaymentStatus.PENDING };
    });
  }
}
