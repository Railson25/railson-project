import { Body, Controller, Post } from "@nestjs/common";
import { SubscriptionsService } from "./subscriptions.service";
import { CreateSubscriptionDto } from "./dto/create-subscription.dto";

@Controller("subscriptions")
export class SubscriptionsController {
  constructor(private readonly subs: SubscriptionsService) {}

  @Post()
  create(@Body() body: CreateSubscriptionDto) {
    return this.subs.create(body);
  }
}
