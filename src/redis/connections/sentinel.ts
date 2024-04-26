import { Injectable, Logger } from '@nestjs/common';
import Redis from "ioredis";
import { RedisConnectionEvents } from "../listeners/connection-events";


@Injectable()
export class RedisSentinelConnection {

    public connect(): Redis {
        try {
            const sentinelHostsString = process.env.REDIS_SENTINEL_HOSTS;
            const sentinels = parseSentinelHosts(sentinelHostsString);
            const client = new Redis({
                sentinels,
                name: process.env.REDIS_SENTINEL_NAME,
                password: process.env.REDIS_SENTINEL_PASSWORD,
                role: process.env.REDIS_SENTINEL_ROLE as 'master' | 'slave',
            });
            new RedisConnectionEvents(client, RedisConnectionEvents.name)
            return client;
        } catch (exception) {
            Logger.error(`${RedisSentinelConnection.name} Exception => ${exception}`);
        }
    }
}

function parseSentinelHosts(sentinelsString: string): { host: string; port: number }[] {
    const sentinelHosts: { host: string; port: number }[] = [];

    const sentinelList = sentinelsString.split(',');
    sentinelList.forEach((sentinel) => {
        const [host, portStr] = sentinel.split(':');
        const port = +portStr;
        sentinelHosts.push({ host, port });
    });

    return sentinelHosts;
}
