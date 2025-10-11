import { Body, Controller, Post } from "@nestjs/common";
import { WebhooksService } from "./webhooks.service";

@Controller("webhooks")
export class WebhooksController {
  constructor(private readonly svc: WebhooksService) {}

  @Post("fake")
  handleFake(@Body() body: any) {
    return this.svc.handleFake(body);
  }
}
