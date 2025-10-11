import { Module } from "@nestjs/common";
import { PaymentsModule } from "../payments/payments.module";
import { InvoicesController } from "./invoices.controller";
import { InvoiceService } from "./invoices.service";
import { SubscriptionsController } from "../subscriptions/subscriptions.controller";
import { SubscriptionsService } from "../subscriptions/subscriptions.service";

@Module({
  imports: [PaymentsModule],
  controllers: [SubscriptionsController, InvoicesController],
  providers: [SubscriptionsService, InvoiceService],
})
export class BillingModule {}
