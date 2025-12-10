import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateFpmaMasterDistrictDto {
  @ApiPropertyOptional({ description: 'รหัสอ้างอิง', maxLength: 20 })
  @IsOptional()
  @IsString()
  @MaxLength(20)
  code?: string;

  @ApiPropertyOptional({ description: 'ชื่อภาษาไทย', maxLength: 200 })
  @IsOptional()
  @IsString()
  @MaxLength(200)
  nameTh?: string;

  @ApiPropertyOptional({ description: 'ชื่อภาษาอังกฤษ', maxLength: 200 })
  @IsOptional()
  @IsString()
  @MaxLength(200)
  nameEn?: string;

  @ApiPropertyOptional({ description: 'ID ของจังหวัด' })
  @IsOptional()
  @IsInt()
  provinceId?: number;

  @ApiPropertyOptional({ description: 'ลำดับการแสดงผล' })
  @IsOptional()
  @IsInt()
  itemOrder?: number;
}