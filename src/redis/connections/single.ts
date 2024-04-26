import { Injectable, Logger } from '@nestjs/common';
import Redis from "ioredis";
import { RedisConnectionEvents } from "../listeners/connection-events";


@Injectable()
export class RedisSingleConnection {

    public connect(): Redis {
        try {
            const client = new Redis(
                parseInt(process.env.REDIS_PORT, 10),
                process.env.REDIS_HOST,
                {
                    username: process.env.REDIS_USERNAME,
                    password: process.env.REDIS_PASSWORD,
                }
            );
            new RedisConnectionEvents(client, RedisConnectionEvents.name)
            return client;
        } catch (exception) {
            Logger.error(`${RedisSingleConnection.name} Exception ${exception}`);
        }
    }
}
