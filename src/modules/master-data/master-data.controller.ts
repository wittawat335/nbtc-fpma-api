// src/modules/master-data/master-data.controller.ts
import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { MasterDataService } from './master-data.service';

@ApiTags('Master Data (Dropdowns)') // ชื่อที่จะโชว์ใน Swagger UI
@Controller('masters')
export class MasterDataController {
  constructor(private readonly masterDataService: MasterDataService) {}

  @Get(':type')
  @ApiOperation({
    summary: 'Get dropdown options by type (e.g. district, department)',
  })
  async getMasterData(@Param('type') type: string) {
    return this.masterDataService.getOptions(type);
  }
}
