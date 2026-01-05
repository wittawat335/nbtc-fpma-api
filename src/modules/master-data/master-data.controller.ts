import { Controller, Get, Param, Query, UseInterceptors } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiQuery } from '@nestjs/swagger';
import { MasterDataService } from './master-data.service';

@ApiTags('Master Data (Dropdowns)')
@Controller('masters')
export class MasterDataController {
  constructor(private readonly masterDataService: MasterDataService) {}

  @Get(':type')
  @ApiOperation({ summary: 'Get dropdown options by type' })
  @ApiQuery({ name: 'parentId', required: false, description: 'ID of the parent (e.g. provinceId for districts)' })
  async getMasterData(
    @Param('type') type: string,
    @Query('parentId') parentId?: string, 
  ) {
    return this.masterDataService.getOptions(type, parentId);
  }

  @Get(':type/:id')
  @ApiOperation({ summary: 'Get single option by ID (Value)' })
  async getMasterDataById(
    @Param('type') type: string,
    @Param('id') id: string,
  ) {
    return this.masterDataService.getById(type, id);
  }
}
