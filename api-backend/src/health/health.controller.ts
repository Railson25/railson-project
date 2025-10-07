import { Controller, Get } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Controller("health")
export class HealthController {
  constructor(private readonly prisma: PrismaService) {}

  @Get("liveness")
  liveness() {
    return { status: "alive" };
  }

  @Get("readiness")
  async readiness() {
    await this.prisma.$queryRaw`SELECT 1`;
    return { status: "ready" };
  }

  @Get()
  async get() {
    await this.prisma.$queryRaw`SELECT 1`;
    return { status: "ok" };
  }
}
