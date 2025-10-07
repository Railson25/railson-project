import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from "@nestjs/common";
import { Prisma } from "@prisma/client";

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaExceptionFilter implements ExceptionFilter {
  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    const res = host.switchToHttp().getResponse();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = "Database error";

    switch (exception.code) {
      case "P2002":
        status = HttpStatus.CONFLICT;
        message = `Unique constraint failed on: ${exception.meta?.target}`;
        break;
      case "P2025":
        status = HttpStatus.NOT_FOUND;
        message = "Record not found";
        break;
    }

    res.status(status).json({
      statusCode: status,
      error: message,
      code: exception.code,
    });
  }
}
