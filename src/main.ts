import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes( // Habilita validaciones globales
    new ValidationPipe({
      whitelist: true, // Elimina propiedades no definidas en los DTOs
    }),
  )

  await app.listen(process.env.PORT ?? 3000);
}


bootstrap();
