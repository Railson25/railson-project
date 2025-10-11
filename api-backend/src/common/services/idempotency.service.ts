import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.service";

@Injectable()
export class IdempotencyService {
  constructor(private readonly prisma: PrismaService) {}

  async run<T>(
    key: string | undefined,
    requestHash: string,
    handler: () => Promise<T>
  ): Promise<T> {
    if (!key) return handler();

    const exp = new Date(Date.now() + 24 * 60 * 60 * 1000);

    await this.prisma.idempotencyKey.upsert({
      where: { key },
      create: { key, requestHash, expiresAt: exp, lockedAt: new Date() },
      update: {},
    });

    const existing = await this.prisma.idempotencyKey.findUnique({
      where: { key },
    });

    if (existing?.responseBody) return existing.responseBody as T;

    const result = await handler();

    await this.prisma.idempotencyKey.update({
      where: { key },
      data: { responseBody: result as any, statusCode: 200, lockedAt: null },
    });

    return result;
  }
}
