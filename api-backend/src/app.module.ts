import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { LoggerModule } from "nestjs-pino";
import { ThrottlerModule, ThrottlerGuard } from "@nestjs/throttler";
import { APP_GUARD } from "@nestjs/core";

import { validateEnv } from "./config/env";

import { PrismaModule } from "./prisma/prisma.module";
import { HealthModule } from "./health/health.module";
import { CustomersModule } from "./customers/customers.module";
import { MetricsModule } from "./metrics/metrics.module";
import { PaymentsModule } from "./payments/payments.module";
import { BillingModule } from "./billing/billing.module";
import { WebhooksModule } from "./webhooks/webhooks.module";
import { AuthModule } from "./auth/auth.module";

const isDev = process.env.NODE_ENV === "development";
const isTest = process.env.NODE_ENV === "test";
const DISABLE_THROTTLE = process.env.DISABLE_THROTTLE === "true";

const THROTTLE_LIMIT = Number(process.env.THROTTLE_LIMIT ?? 120);
const THROTTLE_TTL_MS = Number(process.env.THROTTLE_TTL_MS ?? 60_000);

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
        transport: isDev
          ? { target: "pino-pretty", options: { singleLine: true } }
          : undefined,
        genReqId: (req) =>
          (req.headers["x-request-id"] as string) ||
          globalThis.crypto?.randomUUID?.() ||
          String(Date.now()),
        autoLogging: true,
      },
    }),

    ThrottlerModule.forRoot([{ ttl: THROTTLE_TTL_MS, limit: THROTTLE_LIMIT }]),

    PrismaModule,
    HealthModule,
    AuthModule,
    CustomersModule,
    MetricsModule,
    PaymentsModule,
    BillingModule,
    WebhooksModule,
  ],

  providers: [
    ...(DISABLE_THROTTLE || isTest
      ? []
      : [{ provide: APP_GUARD, useClass: ThrottlerGuard }]),
  ],
})
export class AppModule {}
