import "reflect-metadata";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe, VersioningType } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import helmet from "helmet";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { Logger } from "nestjs-pino";
import { PrismaExceptionFilter } from "./common/filters/prisma-exception.filter";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  app.useLogger(app.get(Logger));

  const config = app.get(ConfigService);

  app.use(helmet());
  app.enableCors({
    origin: config.get("CORS_ORIGIN") || true,
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    })
  );

  app.useGlobalFilters(new PrismaExceptionFilter());

  app.enableVersioning({ type: VersioningType.URI });
  app.setGlobalPrefix("v1");

  const doc = new DocumentBuilder()
    .setTitle("API Backend")
    .setDescription("API Docs")
    .setVersion("1.0.0")
    .build();

  const swagger = SwaggerModule.createDocument(app, doc);
  SwaggerModule.setup("docs", app, swagger);

  app.enableShutdownHooks();

  const port = config.get<number>("PORT") ?? 3000;

  await app.listen(port);
  console.log("HTTP listening on http://localhost:3000");
}
bootstrap();
