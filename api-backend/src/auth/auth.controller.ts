import {
  Controller,
  Post,
  Body,
  Res,
  UnauthorizedException,
  Req,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { RegisterDto } from "./dto/register.dto";
import { LoginDto } from "./dto/login.dto";
import { Request, Response } from "express";
import { JwtService } from "@nestjs/jwt";

@Controller("auth")
export class AuthController {
  constructor(
    private authService: AuthService,
    private jwtService: JwtService
  ) {}

  @Post("register")
  async register(
    @Body() dto: RegisterDto,
    @Res({ passthrough: true }) res: Response
  ) {
    const result = await this.authService.register(dto);

    this.setRefreshCookie(res, result.refresh_token);

    const { refresh_token, ...response } = result;
    return response;
  }

  @Post("login")
  async login(
    @Body() dto: LoginDto,
    @Res({ passthrough: true }) res: Response
  ) {
    const result = await this.authService.login(dto);

    this.setRefreshCookie(res, result.refresh_token);

    const { refresh_token, ...response } = result;
    return response;
  }

  @Post("refresh")
  async refresh(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response
  ) {
    const token = req.cookies?.refresh_token;
    if (!token) throw new UnauthorizedException();

    try {
      const payload: any = this.jwtService.verify(token);

      const newTokens = await this.authService.refreshToken(payload.sub);

      const newRefresh = this.jwtService.sign(
        { sub: payload.sub, email: payload.email },
        { expiresIn: "30d" }
      );

      this.setRefreshCookie(res, newRefresh);

      return newTokens;
    } catch {
      res.clearCookie("refresh_token");
      throw new UnauthorizedException("Token inválido");
    }
  }

  @Post("logout")
  logout(@Res({ passthrough: true }) res: Response) {
    res.clearCookie("refresh_token");
    return { message: "Logout realizado com sucesso" };
  }

  private setRefreshCookie(res: Response, token: string) {
    res.cookie("refresh_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });
  }
}
