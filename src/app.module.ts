import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServerController } from './server/server.controller';

@Module({
  imports: [],
  controllers: [AppController, ServerController],
  providers: [AppService],
})
export class AppModule {}
