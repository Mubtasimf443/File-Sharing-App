import { Module } from '@nestjs/common';
import { SharedFilesController } from './shared_files.controller';
import { SharedFilesService } from './shared_files.service';

@Module({
  controllers: [SharedFilesController],
  providers: [SharedFilesService]
})
export class SharedFilesModule {}
