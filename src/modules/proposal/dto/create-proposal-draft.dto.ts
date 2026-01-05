import { PartialType } from '@nestjs/swagger'; // หรือ @nestjs/mapped-types
import { CreateProposalDto } from './create-proposal.dto';

// PartialType จะทำให้ทุก field ของ CreateProposalDto กลายเป็น Optional โดยอัตโนมัติ
export class CreateProposalDraftDto extends PartialType(CreateProposalDto) {}
