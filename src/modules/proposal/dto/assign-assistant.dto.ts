import { IsArray, IsInt, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AssignAssistantDto {
  @ApiProperty({
    description: 'List of User IDs to be assigned as assistants',
    example: [101, 102],
    type: [Number],
  })
  @IsArray()
  @IsInt({ each: true })
  @IsNotEmpty()
  operatorIds: number[];
}
