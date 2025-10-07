import { Body, Controller, Get, Post } from "@nestjs/common";
import { CustomersService } from "./customers.service";
import { CreateCustomerDto } from "./dto/create-customer.dto";

@Controller("customers")
export class CustomersController {
  constructor(private readonly customers: CustomersService) {}

  @Post()
  create(@Body() body: CreateCustomerDto) {
    return this.customers.create(body);
  }

  @Get()
  list() {
    return this.customers.list();
  }
}
