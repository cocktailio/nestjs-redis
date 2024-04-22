import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import Redis from "ioredis";
import { RedisConnectionStatuses } from "../enums/connection-statuses";
import { RedisConnectionOptions } from "../enums/connection-options";
import { RedisSingleConnection } from "./single";
import { RedisSentinelConnection } from "./sentinel";

let redisClient: Redis;

@Injectable()
export class RedisConnection {

    public connect(): Redis {
        if (redisClient && redisClient.status != RedisConnectionStatuses.CLOSE && redisClient.status != RedisConnectionStatuses.END) {
            return redisClient;
        }

        if (process.env.REDIS_TYPE === RedisConnectionOptions.SINGLE) {
            redisClient = new RedisSingleConnection().connect();
        } else if (process.env.REDIS_TYPE === RedisConnectionOptions.SENTINEL) {
            redisClient = new RedisSentinelConnection().connect();
        } else {
            throw new HttpException({
                errorCode: HttpStatus.NOT_FOUND,
                message: "Invalid REDIS_TYPE"
            }, HttpStatus.BAD_REQUEST)
        }

        return redisClient;
    }
}
