import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { envSchema } from "./env/env";
import { EnvModule } from "./env/env.module";
import { HttpModule } from "@nestjs/axios";
import { CountryModule } from "src/countries/country.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    EnvModule,
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
      global: true,
    }),
    CountryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
