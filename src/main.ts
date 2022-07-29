import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { abortOnError: true });
  await app.listen(3000);
}
bootstrap();
