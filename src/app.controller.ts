import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { RedisService } from "./redis/service";

@Controller()
export class AppController {
    constructor(
        private readonly appService: AppService,
        private readonly redisService: RedisService
    ) {
    }

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }

    @Get('health-check')
    async healthCheck() {
        return {
            redis: await this.redisService.ping()
        }
    }

    //Examples
    @Get('save')
    async save() {
        const save = await this.redisService.defaultIndex().set('foo', 'bar');
        let message = "success";
        if (!save){
            message = "failed"
        }
        return message
    }

    @Get('get')
    async get() {
        return this.redisService.defaultIndex().get('foo');
    }
}
