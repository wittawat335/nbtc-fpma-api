import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FpmaFile, FpmaProposalFile } from 'src/entities';
import { Repository } from 'typeorm';
import { createReadStream, existsSync } from 'fs';
import { FileManagerUtil } from 'src/common/utils';
import * as mime from 'mime-types';

@Injectable()
export class FilesService {
  constructor(
    @InjectRepository(FpmaFile)
    private readonly filesRepository: Repository<FpmaFile>,

    @InjectRepository(FpmaProposalFile)
    private readonly proposalFileRepository: Repository<FpmaProposalFile>,
  ) {}

  async saveFile(
    file: Express.Multer.File,
    documentType: string,
    description?: string,
    userId?: number | null,
    proposalId?: number | null,
  ) {
    const newFile = new FpmaFile();
    newFile.name = description || file.originalname;
    newFile.path = file.path;
    newFile.extension = file.originalname.split('.').pop() ?? null;
    newFile.size = file.size.toString();
    newFile.type = documentType;

    newFile.itemCreatedWhen = new Date();
    newFile.itemCreatedBy = userId || null;

    const savedFile = await this.filesRepository.save(newFile);

    if (proposalId) {
      const newProposalFile = new FpmaProposalFile();
      newProposalFile.proposalId = proposalId;
      newProposalFile.fileId = savedFile.itemId;
      newProposalFile.itemCreatedBy = userId || null;
      newProposalFile.itemCreatedWhen = new Date();

      await this.proposalFileRepository.save(newProposalFile);
    }

    return savedFile;
  }

  async getFileStream(id: number) {
    const file = await this.filesRepository.findOne({ where: { itemId: id } });

    if (!file) {
      throw new NotFoundException(`File with ID ${id} not found`);
    }

    if (!file.path || !existsSync(file.path)) {
      throw new NotFoundException(`Physical file not found on server`);
    }

    const fileStream = createReadStream(file.path);

    const mimeType =
      mime.lookup(file.extension || '') || 'application/octet-stream';

    return {
      fileStream,
      fileName: file.name + (file.extension ? `.${file.extension}` : ''),
      mimeType,
    };
  }

  async deleteFile(id: number) {
    const file = await this.filesRepository.findOne({ where: { itemId: id } });
    if (!file) {
      throw new NotFoundException(`File with ID ${id} not found`);
    }

    await this.proposalFileRepository.delete({ fileId: id });

    await this.filesRepository.delete(id);

    if (file.path) {
      FileManagerUtil.deleteFile(file.path);
    }

    return { success: true, message: `File ${id} deleted successfully` };
  }
}
