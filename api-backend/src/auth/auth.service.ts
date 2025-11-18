import {
  Injectable,
  ConflictException,
  UnauthorizedException,
} from "@nestjs/common";
import { RegisterDto } from "./dto/register.dto";
import { LoginDto } from "./dto/login.dto";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import { PrismaService } from "../prisma/prisma.service";

const ACCESS_TOKEN_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "30m";

const REFRESH_TOKEN_EXPIRES_IN = process.env.JWT_REFRESH_EXPIRES_IN || "30d";

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async register(dto: RegisterDto) {
    const existing = await this.prisma.user.findUnique({
      where: { email: dto.email.toLowerCase() },
    });

    if (existing) throw new ConflictException("E-mail já cadastrado");

    const hashed = await bcrypt.hash(dto.password, 12);

    const user = await this.prisma.user.create({
      data: {
        name: dto.name,
        email: dto.email.toLowerCase(),
        accounts: {
          create: {
            type: "credentials",
            provider: "credentials",
            providerAccountId: dto.email.toLowerCase(),
            password: hashed,
          },
        },
      },
      include: { accounts: true },
    });

    return this.generateTokens(user);
  }

  async login(dto: LoginDto) {
    const account = await this.prisma.account.findFirst({
      where: {
        provider: "credentials",
        providerAccountId: dto.email.toLowerCase(),
      },
      include: { user: true },
    });

    if (
      !account?.password ||
      !(await bcrypt.compare(dto.password, account.password))
    ) {
      throw new UnauthorizedException("E-mail ou senha incorretos");
    }

    return this.generateTokens(account.user);
  }

  async refreshToken(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });
    if (!user) throw new UnauthorizedException();

    const payload = { sub: user.id, email: user.email };

    return {
      access_token: this.jwtService.sign(payload, {
        expiresIn: ACCESS_TOKEN_EXPIRES_IN as any,
      }),
    };
  }

  private generateTokens(user: any) {
    const payload = { sub: user.id, email: user.email };

    return {
      access_token: this.jwtService.sign(payload, {
        expiresIn: ACCESS_TOKEN_EXPIRES_IN as any,
      }),

      refresh_token: this.jwtService.sign(payload, {
        expiresIn: REFRESH_TOKEN_EXPIRES_IN as any,
      }),

      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    };
  }
}
