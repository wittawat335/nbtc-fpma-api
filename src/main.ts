import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  if (process.env.NODE_ENV !== 'production') {
    // 2. ตั้งค่า Config ของ Swagger
    const config = new DocumentBuilder()
      .setTitle('My API Documentation') // ชื่อหัวข้อเอกสาร
      .setDescription('The API description') // รายละเอียด
      .setVersion('1.0') // เวอร์ชันของ API
      .addTag('users') // (Optional) เพิ่ม Tag หลัก
      .addBearerAuth() // (Optional) JWT Auth
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
  }

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
