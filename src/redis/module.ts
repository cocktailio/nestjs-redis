import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { RedisConnection } from "./connections/base";
import { RedisService } from "./service";

@Module({
    imports: [ConfigModule.forRoot()],
    providers: [RedisConnection, RedisService],
    exports: [RedisConnection, RedisService]
})
export class RedisModule {
}
