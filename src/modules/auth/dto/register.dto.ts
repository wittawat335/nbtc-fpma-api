import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
  @ApiProperty({ example: 'user1', description: 'ชื่อผู้ใช้งาน' })
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({ example: 'password123', description: 'รหัสผ่าน' })
  @IsString()
  @IsNotEmpty()
  @MinLength(6, { message: 'รหัสผ่านต้องมีความยาวอย่างน้อย 6 ตัวอักษร' })
  password: string;

  @ApiProperty({ example: 'user@example.com', description: 'อีเมล' })
  @IsEmail({}, { message: 'รูปแบบอีเมลไม่ถูกต้อง' })
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'Somchai', description: 'ชื่อจริง' })
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({ example: 'Jaidee', description: 'นามสกุล' })
  @IsString()
  @IsNotEmpty()
  lastName: string;
}
