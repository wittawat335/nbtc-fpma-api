import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ProposalAssignmentService } from '../services/proposal-assignment.service';
import { AssignAssistantDto } from '../dto/assign-assistant.dto';

@ApiTags('Proposal Assignment')
@Controller('proposal')
export class ProposalAssignmentController {
  constructor(private readonly service: ProposalAssignmentService) {}

  @Get('assistants')
  @ApiOperation({ summary: 'Get all active assistants' })
  async findAllAssistant() {
    return await this.service.findAllAssistant();
  }

  @Post(':id/assign')
  @ApiOperation({ summary: 'Assign operators to a proposal' })
  @ApiResponse({ status: 201, description: 'Assignment successful' })
  async assignOperators(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: AssignAssistantDto,
  ) {
    // TODO: ดึง userId จาก JWT Token แทนการ Hardcode
    const currentUserId = -1;
    return await this.service.assignOperators(
      id,
      dto.operatorIds,
      currentUserId,
    );
  }
}
