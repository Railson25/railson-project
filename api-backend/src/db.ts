import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const created = await prisma.customer.create({
    data: { email: `railson+${Date.now()}@example.com` },
  });

  const customers = await prisma.customer.findMany({
    orderBy: { createdAt: "desc" },
    take: 5,
  });

  console.log("✅ Novo cliente criado:", created);
  console.log("📋 Últimos clientes:", customers);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
