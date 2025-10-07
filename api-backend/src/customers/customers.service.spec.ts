import { CustomersService } from "./customers.service";

describe("CustomersService (unit)", () => {
  const prismaMock = {
    customer: {
      create: jest.fn(),
      findMany: jest.fn(),
    },
  } as any;

  const service = new CustomersService(prismaMock);

  it("create() chama prisma.customer.create", async () => {
    prismaMock.customer.create.mockResolvedValue({
      id: "1",
      email: "a@b.com",
      createdAt: new Date(),
    });
    const res = await service.create({ email: "a@b.com" });
    expect(prismaMock.customer.create).toHaveBeenCalledWith({
      data: { email: "a@b.com" },
    });
    expect(res.email).toBe("a@b.com");
  });

  it("list() retorna array", async () => {
    prismaMock.customer.findMany.mockResolvedValue([]);
    const res = await service.list();
    expect(Array.isArray(res)).toBe(true);
  });
});
