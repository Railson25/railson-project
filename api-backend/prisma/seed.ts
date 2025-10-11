import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const plans = [
    { code: "basic", priceCents: 1990, interval: "month", active: true },
    { code: "business", priceCents: 4990, interval: "month", active: true },
    { code: "enterprise", priceCents: 9990, interval: "month", active: true },
  ];

  for (const p of plans) {
    await prisma.plan.upsert({
      where: { code: p.code },
      update: { ...p },
      create: { ...p },
    });
  }
  console.log("✅ Seed de planos OK");
}

main().finally(() => prisma.$disconnect());
