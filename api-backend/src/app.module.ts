import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { validateEnv } from "./config/env";
import { LoggerModule } from "nestjs-pino";
import { ThrottlerModule, ThrottlerGuard } from "@nestjs/throttler";
import { APP_GUARD } from "@nestjs/core";

import { PrismaModule } from "../src/prisma/prisma.module";
import { HealthModule } from "../src/health/health.module";
import { CustomersModule } from "./customers/customers.module";
import { MetricsModule } from "./metrics/metrics.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      envFilePath: [`.env.${process.env.NODE_ENV}`, ".env"],
      validate: validateEnv,
    }),

    LoggerModule.forRoot({
      pinoHttp: {
        transport:
          process.env.NODE_ENV === "development"
            ? { target: "pino-pretty", options: { singleLine: true } }
            : undefined,
        genReqId: (req) =>
          (req.headers["x-request-id"] as string) ||
          globalThis.crypto?.randomUUID?.() ||
          String(Date.now()),
        autoLogging: true,
      },
    }),

    ThrottlerModule.forRoot([{ ttl: 60_000, limit: 120 }]),
    PrismaModule,
    HealthModule,
    CustomersModule,
    MetricsModule,
  ],
  providers: [{ provide: APP_GUARD, useClass: ThrottlerGuard }],
})
export class AppModule {}
