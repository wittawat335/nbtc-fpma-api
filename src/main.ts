import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getCorsOptions } from './core/config/cors';
import { setupSwagger } from './core/config/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors(getCorsOptions());

  if (process.env.NODE_ENV !== 'production') {
    setupSwagger(app);
  }

  await app.listen(process.env.PORT ?? 4200);
}
bootstrap();
