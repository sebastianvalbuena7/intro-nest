import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    // ! Limpia las propiedades que no son necesarias y no se piden
    whitelist: true
  }));

  await app.listen(3000);
}
bootstrap();

