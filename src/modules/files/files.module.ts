import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { FilesController } from './files.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { FpmaFile, FpmaProposalFile } from 'src/entities';
import { FileManagerUtil, FileUploadUtil } from 'src/common/utils';

@Module({
  imports: [
    TypeOrmModule.forFeature([FpmaFile, FpmaProposalFile]),
    MulterModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        storage: diskStorage({
          destination: (req, file, cb) => {
            try {
              const uploadPath =
                configService.get<string>('uploadDestination') ?? './uploads';

              FileManagerUtil.ensureDirectoryExistence(uploadPath);

              cb(null, uploadPath);
            } catch (error) {
              console.error('Error creating upload directory:', error);
              cb(error, '');
            }
          },
          filename: FileUploadUtil.customFileName,
        }),
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [FilesController],
  providers: [FilesService],
  exports: [FilesService],
})
export class FilesModule {}
