import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {RedisModule} from "./redis/module";
import {ConfigModule} from "@nestjs/config";

@Module({
  imports: [
      ConfigModule.forRoot(),
      RedisModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
