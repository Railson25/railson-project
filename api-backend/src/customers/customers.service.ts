import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateCustomerDto } from "./dto/create-customer.dto";

@Injectable()
export class CustomersService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateCustomerDto) {
    return this.prisma.customer.create({ data });
  }

  list() {
    return this.prisma.customer.findMany({
      orderBy: { createdAt: "desc" },
      take: 20,
    });
  }
}
