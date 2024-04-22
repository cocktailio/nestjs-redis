import { Injectable } from "@nestjs/common";

@Injectable()
export class RedisSingleConfig {
    readonly host: string;
    readonly port: number;
    readonly username: string;
    readonly password: string;
    readonly prefix: string;

    constructor() {
        this.host = process.env.REDIS_HOST || '127.0.0.1';
        this.port = parseInt(process.env.REDIS_PORT, 10) || 6379;
        this.username = process.env.REDIS_USERNAME || '';
        this.password = process.env.REDIS_PASSWORD || '';
        this.prefix = process.env.REDIS_PREFIX || 'app:';
    }
}
