import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { PaymentsService } from "./payments.service";
import { PaymentsQueue } from "./payments.queue";

@Module({
  imports: [ConfigModule],
  providers: [PaymentsService, PaymentsQueue],
  exports: [PaymentsService, PaymentsQueue],
})
export class PaymentsModule {}
