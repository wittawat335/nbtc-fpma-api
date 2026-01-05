import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import {
  FpmaProposal,
  FpmaMasterProposalStatus,
  FpmaProposalStaffComment,
  FpmaProposalAssistant,
} from 'src/entities';
import { AssistantStatus } from 'src/common/enums/proposal.enum';
import { ReviewProposalDto } from '../dto/review-proposal.dto';

@Injectable()
export class ProposalReviewService {
  constructor(
    @InjectRepository(FpmaProposal)
    private proposalRepository: Repository<FpmaProposal>,
    @InjectRepository(FpmaMasterProposalStatus)
    private proposalStatusRepository: Repository<FpmaMasterProposalStatus>,
    @InjectRepository(FpmaProposalStaffComment)
    private proposalStaffCommentRepository: Repository<FpmaProposalStaffComment>,
    private dataSource: DataSource,
  ) {}

  async getProposalStatus(): Promise<FpmaMasterProposalStatus[]> {
    return this.proposalStatusRepository.find();
  }

  async findMyReviewProposals(userId: number) {
    return this.proposalRepository
      .createQueryBuilder('p')
      .innerJoin(
        FpmaProposalAssistant,
        'a',
        'a.proposalId = p.itemId AND a.userId = :userId AND a.status = :status',
        { userId, status: AssistantStatus.ACTIVE },
      )
      .getMany();
  }

  async reviewProposal(
    proposalId: number,
    dto: ReviewProposalDto,
    reviewerUserId: number,
  ) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const manager = queryRunner.manager;

      // 1. Update Proposal Status
      const proposal = await manager.findOne(FpmaProposal, {
        where: { itemId: proposalId },
      });

      if (!proposal) {
        throw new NotFoundException(`Proposal with ID ${proposalId} not found`);
      }

      proposal.proposalStatusId = dto.proposalStatusId;
      proposal.itemModifiedBy = reviewerUserId;
      proposal.itemModifiedWhen = new Date();

      await manager.save(proposal);

      // 2. Add Comment
      const staffComment = new FpmaProposalStaffComment();
      staffComment.proposalId = proposalId;
      staffComment.proposalStatusId = dto.proposalStatusId;
      staffComment.message = dto.comment;
      staffComment.itemCreatedBy = reviewerUserId;
      staffComment.itemCreatedWhen = new Date();

      await manager.save(staffComment);

      await queryRunner.commitTransaction();
      return { success: true, message: 'Proposal reviewed successfully' };
    } catch (err) {
      await queryRunner.rollbackTransaction();
      console.error('Review Proposal Error:', err);
      if (err instanceof NotFoundException) throw err;
      throw new InternalServerErrorException('Failed to review proposal');
    } finally {
      await queryRunner.release();
    }
  }

  async findCommentProposals(
    proposalId: number,
  ): Promise<FpmaProposalStaffComment[]> {
    return this.proposalStaffCommentRepository.find({
      where: { proposalId: proposalId },
      order: { itemId: 'DESC' },
    });
  }
}
