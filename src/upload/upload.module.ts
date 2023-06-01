import { Module } from '@nestjs/common';
import { UploadService } from './upload.service';
import { UploadController } from './upload.controller';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    MulterModule.register({
      dest: './uploads', // 上传文件存储目录
    }),
  ],
  controllers: [UploadController],
  providers: [UploadService],
})
export class UploadModule {}
