/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ   InshaAllah
*/
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilesModule } from './files/files.module';
import { SharedModule } from './shared/shared.module';



@Module({
  imports: [FilesModule, SharedModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule  {

}
