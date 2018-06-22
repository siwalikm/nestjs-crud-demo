import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { FakePostsController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, FakePostsController],
  providers: [AppService]
})

export class AppModule {}
