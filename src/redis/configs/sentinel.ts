import { Injectable } from "@nestjs/common";

@Injectable()
export class RedisSentinelConfig {
    readonly host: string;
    readonly port: number;
    readonly username: string;
    readonly password: string;
    readonly prefix: string;
    readonly master: string;

    constructor() {
        this.host = process.env.REDIS_SENTINEL_HOST || '127.0.0.1';
        this.port = parseInt(process.env.REDIS_SENTINEL_PORT, 10) || 6379;
        this.username = process.env.REDIS_SENTINEL_USERNAME || '';
        this.password = process.env.REDIS_SENTINEL_PASSWORD || '';
        this.prefix = process.env.REDIS_SENTINEL_PREFIX || 'app:';
        this.master = process.env.REDIS_SENTINEL_MASTER || 'app:';
    }
}
