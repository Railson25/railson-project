import { Test } from "@nestjs/testing";
import { INestApplication, ValidationPipe } from "@nestjs/common";
import request from "supertest";
import { AppModule } from "../src/app.module";
import { PrismaService } from "../src/prisma/prisma.service";

describe("App E2E", () => {
  let app: INestApplication;
  let prisma: PrismaService;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();

    app.setGlobalPrefix("v1");

    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      })
    );

    await app.init();

    prisma = app.get(PrismaService);

    await prisma.customer.deleteMany({});
  });

  afterAll(async () => {
    await app.close();
  });

  it("POST /v1/customers cria um customer", async () => {
    const email = `test+${Date.now()}@ex.com`;

    const res = await request(app.getHttpServer())
      .post("/v1/customers")
      .send({ email })
      .expect(201);

    expect(res.body).toHaveProperty("id");
    expect(res.body.email).toBe(email);
  });

  it("GET /v1/customers lista customers", async () => {
    const res = await request(app.getHttpServer())
      .get("/v1/customers")
      .expect(200);

    expect(Array.isArray(res.body)).toBe(true);
  });
});
