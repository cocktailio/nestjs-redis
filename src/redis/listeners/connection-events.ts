import Redis from "ioredis";
import { Logger } from "@nestjs/common";
import { RedisConnectionStatuses } from "../enums/connection-statuses";

const PROJECT_NAME = process.env.PROJECT_NAME;

export class RedisConnectionEvents {
    constructor(client: Redis, className: string) {
        client.on(RedisConnectionStatuses.CONNECT, () => Logger.verbose(`${PROJECT_NAME} => ${className} Connection Status => ${RedisConnectionStatuses.CONNECT}`));
        client.on(RedisConnectionStatuses.READY, () => Logger.verbose(`${PROJECT_NAME} => ${className} Connection Status => ${RedisConnectionStatuses.READY}`));
        client.on(RedisConnectionStatuses.RECONNECTING, () => Logger.verbose(`${PROJECT_NAME} => ${className} Connection Status => ${RedisConnectionStatuses.RECONNECTING}`));
        client.on(RedisConnectionStatuses.ERROR, (error) => Logger.error(`${PROJECT_NAME} => ${className} Connection Status => ${RedisConnectionStatuses.ERROR}`, error));
        client.on(RedisConnectionStatuses.END, () => Logger.verbose(`${PROJECT_NAME} => ${className} Connection Status => ${RedisConnectionStatuses.END}`));
    }
}
