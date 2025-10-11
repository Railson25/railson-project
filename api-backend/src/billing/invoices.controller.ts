import { Controller, Headers, Post, Param } from "@nestjs/common";
import { InvoiceService } from "./invoices.service";

@Controller("invoices")
export class InvoicesController {
  constructor(private readonly invoices: InvoiceService) {}

  @Post(":id/pay")
  pay(@Param("id") id: string, @Headers("idempotency-key") idemKey?: string) {
    return this.invoices.pay(id, idemKey);
  }
}
