import { IsUUID, IsString, MaxLength } from "class-validator";

export class CreateSubscriptionDto {
  @IsUUID("4", { message: "customerId deve ser UUID v4" })
  customerId!: string;

  @IsString({ message: "planCode deve ser uma string" })
  @MaxLength(50, { message: "planCode pode ter no máximo 50 caracteres" })
  planCode!: string;
}
