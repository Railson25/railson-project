import { Controller, Get, Header } from "@nestjs/common";
import client from "prom-client";

const registry = new client.Registry();
client.collectDefaultMetrics({ register: registry });

@Controller()
export class MetricsController {
  @Get("metrics")
  @Header("Content-type", registry.contentType)
  async metrics(): Promise<string> {
    return registry.metrics();
  }
}
