import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { FpmaProposalAssistant } from 'src/entities';
import { AssistantStatus } from 'src/common/enums/proposal.enum';

@Injectable()
export class ProposalAssignmentService {
  constructor(
    @InjectRepository(FpmaProposalAssistant)
    private proposalAssistantRepository: Repository<FpmaProposalAssistant>,
    private dataSource: DataSource,
  ) {}

  async findAllAssistant(): Promise<FpmaProposalAssistant[]> {
    return this.proposalAssistantRepository.find({
      where: { status: AssistantStatus.ACTIVE },
    });
  }

  async assignOperators(
    proposalId: number,
    operatorIds: number[],
    currentUserId: number,
  ) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const assistantRepo = queryRunner.manager.getRepository(
        FpmaProposalAssistant,
      );

      // 1. ดึงข้อมูลผ่าน Transaction Manager
      const currentAssistants = await assistantRepo.find({
        where: { proposalId },
      });

      // 2. ปรับสถานะคนที่ไม่ถูกเลือกเป็น INACTIVE
      const toInactivate = currentAssistants.filter(
        (a) => a.userId !== null && !operatorIds.includes(a.userId),
      );

      for (const assistant of toInactivate) {
        assistant.status = AssistantStatus.INACTIVE;
        await assistantRepo.save(assistant);
      }

      // 3. Insert คนใหม่ หรือ Activate คนเดิม
      for (const userId of operatorIds) {
        const existing = currentAssistants.find((a) => a.userId === userId);
        if (existing) {
          if (existing.status !== AssistantStatus.ACTIVE) {
            existing.status = AssistantStatus.ACTIVE;
            await assistantRepo.save(existing);
          }
        } else {
          const assistant = new FpmaProposalAssistant();
          assistant.proposalId = proposalId;
          assistant.userId = userId;
          assistant.status = AssistantStatus.ACTIVE;
          assistant.itemCreatedBy = currentUserId;
          assistant.itemCreatedWhen = new Date();
          await assistantRepo.save(assistant);
        }
      }

      await queryRunner.commitTransaction();
      return { success: true, message: 'Assistants assigned successfully' };
    } catch (err) {
      await queryRunner.rollbackTransaction();
      console.error('Assign Operators Error:', err);
      throw new InternalServerErrorException('Failed to assign operators');
    } finally {
      await queryRunner.release();
    }
  }
}
