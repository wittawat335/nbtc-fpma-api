import { IsInt, IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ReviewProposalDto {
  @ApiProperty({ description: 'ID of the new status', example: 3 })
  @IsInt()
  @IsNotEmpty()
  proposalStatusId: number;

  @ApiProperty({
    description: 'Review comment',
    example: 'Approved by committee',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(1000)
  comment: string;
}
