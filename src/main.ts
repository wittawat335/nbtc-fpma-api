import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 2. ตั้งค่า Config ของ Swagger
  const config = new DocumentBuilder()
    .setTitle('My API Documentation') // ชื่อหัวข้อเอกสาร
    .setDescription('The API description') // รายละเอียด
    .setVersion('1.0') // เวอร์ชันของ API
    .addTag('users') // (Optional) เพิ่ม Tag หลัก
    .addBearerAuth() // (Optional) ถ้ามีการใช้ JWT Auth ให้ใส่บรรทัดนี้ไว้รอเลย
    .build();

  // 3. สร้าง Document
  const document = SwaggerModule.createDocument(app, config);

  // 4. Setup Swagger ที่ Path '/api'
  SwaggerModule.setup('api', app, document);
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
