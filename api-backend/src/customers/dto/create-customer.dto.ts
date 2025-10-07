import { IsEmail, IsNotEmpty, MaxLength } from "class-validator";

export class CreateCustomerDto {
  @IsEmail()
  @IsNotEmpty()
  @MaxLength(255)
  email!: string;
}
