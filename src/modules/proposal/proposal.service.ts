import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Not } from 'typeorm';
import { plainToInstance } from 'class-transformer';
import { FpmaProposal } from 'src/entities';
import { CreateProposalDto } from './dto/create-proposal.dto';
import { UpdateProposalDto } from './dto/update-proposal.dto';
import { StringUtil } from 'src/common/utils';
import { ProposalStatus } from 'src/common/enums/proposal.enum';

@Injectable()
export class ProposalService {
  constructor(
    @InjectRepository(FpmaProposal)
    private proposalRepository: Repository<FpmaProposal>,
  ) {}

  async findAll(): Promise<FpmaProposal[]> {
    return this.proposalRepository.find({
      where: { proposalStatusId: Not(ProposalStatus.DRAFT) },
      order: { itemCreatedWhen: 'DESC' },
    });
  }

  async getByItemCreatedBy(userId: number): Promise<FpmaProposal[]> {
    return this.proposalRepository.find({
      where: { itemCreatedBy: userId },
      order: { itemCreatedWhen: 'DESC' },
    });
  }

  async getByItemCreatedByPaging(userId: number, page = 1, pageSize = 10) {
    const [items, total] = await this.proposalRepository.findAndCount({
      where: { itemCreatedBy: userId },
      order: { itemModifiedWhen: 'DESC' },
      skip: (page - 1) * pageSize,
      take: pageSize,
    });
    return { items, total, page, pageSize };
  }

  async findOne(id: number) {
    return await this.proposalRepository.findOne({
      where: { itemId: id },
      relations: ['proposalFiles', 'proposalFiles.file'],
    });
  }

  async create(createDto: CreateProposalDto): Promise<FpmaProposal> {
    const newProposal = plainToInstance(FpmaProposal, createDto);
    newProposal.itemCreatedWhen = new Date();
    newProposal.itemModifiedWhen = new Date();
    newProposal.itemGuid = StringUtil.uuid();

    if (!newProposal.proposalStatusId) {
      newProposal.proposalStatusId = ProposalStatus.DRAFT;
    }

    if (createDto.itemCreatedBy)
      newProposal.itemCreatedBy = createDto.itemCreatedBy;
    if (createDto.itemModifiedBy)
      newProposal.itemModifiedBy = createDto.itemModifiedBy;
    else if (createDto.itemCreatedBy)
      newProposal.itemModifiedBy = createDto.itemCreatedBy;

    return this.proposalRepository.save(newProposal);
  }

  async update(
    id: number,
    updateProposalDto: UpdateProposalDto,
  ): Promise<FpmaProposal> {
    const proposal = await this.proposalRepository.findOne({
      where: { itemId: id },
    });
    if (!proposal)
      throw new NotFoundException(`Proposal with ID ${id} not found`);

    const updatedProposal = this.proposalRepository.merge(
      proposal,
      updateProposalDto,
    );
    updatedProposal.itemModifiedWhen = new Date();
    return this.proposalRepository.save(updatedProposal);
  }
}
