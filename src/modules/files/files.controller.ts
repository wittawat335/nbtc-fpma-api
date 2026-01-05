import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  Body,
  BadRequestException,
  Get,
  Param,
  Res,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FilesService } from './files.service';
import type { Response } from 'express';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Body('documentType') documentType: string,
    @Body('description') description: string,
    @Body('userId') userId: string,
    @Body('proposalId') proposalId: string,
  ) {
    if (!file) {
      throw new BadRequestException('No file uploaded');
    }

    file.originalname = Buffer.from(file.originalname, 'latin1').toString('utf8');

    const createdBy = userId ? parseInt(userId, 10) : null;
    const propId = proposalId ? parseInt(proposalId, 10) : null;

    return this.filesService.saveFile(
      file,
      documentType,
      description,
      createdBy,
      propId,
    );
  }

  @Get(':id/download')
  async downloadFile(
    @Param('id', ParseIntPipe) id: number,
    @Res() res: Response,
  ) {
    const { fileStream, fileName, mimeType } =
      await this.filesService.getFileStream(id);

    res.set({
      'Content-Type': mimeType,
      'Content-Disposition': `inline; filename="${encodeURIComponent(fileName)}"`,
    });

    fileStream.pipe(res);
  }

  @Delete(':id')
  async deleteFile(@Param('id', ParseIntPipe) id: number) {
    return this.filesService.deleteFile(id);
  }
}