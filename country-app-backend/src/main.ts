import { NestFactory } from "@nestjs/core";
import { AppModule } from "./infra/app.module";
import { EnvService } from "./infra/env/env.service";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(EnvService);
  const port = configService.get("PORT");

  app.enableCors();

  await app.listen(port);
}
bootstrap();
