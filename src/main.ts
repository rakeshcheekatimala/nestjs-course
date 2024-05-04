import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // root module of the application
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
