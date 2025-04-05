/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ   InshaAllah
*/
import { MiddlewareConsumer, Module,NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilesModule } from './files/files.module';
import { SharedModule } from './shared/shared.module';
import { CorsMiddleware } from './common/midlewares/cors';


@Module({
  imports: [FilesModule, SharedModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule  {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CorsMiddleware).forRoutes("*")

  }
}
