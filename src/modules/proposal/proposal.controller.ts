import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  HttpCode,
  HttpStatus,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProposalService } from './proposal.service';
import { CreateProposalDto } from './dto/create-proposal.dto';
import { UpdateProposalDto } from './dto/update-proposal.dto';

@ApiTags('Proposal Core')
@Controller('proposal')
export class ProposalController {
  constructor(private readonly service: ProposalService) {}

  @Get()
  async findAll() {
    return await this.service.findAll();
  }

  @Get('creator/:userId')
  async getByItemCreatedBy(@Param('userId', ParseIntPipe) userId: number) {
    return await this.service.getByItemCreatedBy(userId);
  }

  @Get('paging/:userId')
  async getByItemCreatedByPaging(
    @Param('userId', ParseIntPipe) userId: number,
    @Query('page') page?: string,
    @Query('pageSize') pageSize?: string,
  ) {
    return await this.service.getByItemCreatedByPaging(
      userId,
      Number(page) || 1,
      Number(pageSize) || 10,
    );
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.service.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createDto: CreateProposalDto) {
    return await this.service.create(createDto);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProposalDto: UpdateProposalDto,
  ) {
    return this.service.update(id, updateProposalDto);
  }
}
