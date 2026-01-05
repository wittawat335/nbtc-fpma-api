import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { ProposalReviewService } from '../services/proposal-review.service';
import { ReviewProposalDto } from '../dto/review-proposal.dto';

@ApiTags('Proposal Review')
@Controller('proposal')
export class ProposalReviewController {
  constructor(private readonly service: ProposalReviewService) {}

  @Get('master/status')
  async getProposalStatus() {
    return await this.service.getProposalStatus();
  }

  @Get('review/my/:userId')
  async findMyReviewProposals(@Param('userId', ParseIntPipe) userId: number) {
    return this.service.findMyReviewProposals(userId);
  }

  @Post(':id/reviewProposal')
  @ApiOperation({ summary: 'Review (Approve/Reject) a proposal with comment' })
  async reviewProposal(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: ReviewProposalDto,
  ) {
    const currentUserId = -1; // TODO: ใช้ req.user.id
    return await this.service.reviewProposal(id, dto, currentUserId);
  }

  @Get('review/comment/:id')
  async findCommentProposals(@Param('id', ParseIntPipe) id: number) {
    return this.service.findCommentProposals(id);
  }
}
