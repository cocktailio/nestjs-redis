import { Injectable, Logger } from '@nestjs/common';
import Redis from "ioredis";
import { RedisSingleConfig } from "../configs/single";
import { RedisConnectionEvents } from "../listeners/connection-events";


@Injectable()
export class RedisSentinelConnection {

    public connect(): Redis {
        try {
            const client = new Redis(new RedisSingleConfig());
            new RedisConnectionEvents(client, RedisConnectionEvents.name)
            return client;
        } catch (exception) {
            Logger.error(`${RedisSentinelConnection.name} Exception => ${exception}`);
        }
    }
}
