import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  FpmaProposal,
  FpmaProposalAssistant,
  FpmaMasterProposalStatus,
  FpmaProposalStaffComment,
} from 'src/entities';
import { ProposalController } from './proposal.controller';
import { ProposalAssignmentController } from './controllers/proposal-assignment.controller';
import { ProposalReviewController } from './controllers/proposal-review.controller';
import { ProposalService } from './proposal.service';
import { ProposalAssignmentService } from './services/proposal-assignment.service';
import { ProposalReviewService } from './services/proposal-review.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      FpmaProposal,
      FpmaProposalAssistant,
      FpmaMasterProposalStatus,
      FpmaProposalStaffComment,
    ]),
  ],
  controllers: [
    ProposalAssignmentController,
    ProposalReviewController,
    ProposalController,
  ],
  providers: [
    ProposalService,
    ProposalAssignmentService,
    ProposalReviewService,
  ],
  exports: [ProposalService],
})
export class ProposalModule {}
