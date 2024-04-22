import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { RedisConnection } from "./connections/base";
import { RedisIndexes } from "./enums";

@Injectable()
export class RedisService {

    constructor(
        private readonly redisConnection: RedisConnection
    ) {}

    //for healthcheck
    async ping(): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            const client = this.redisConnection.connect();
            client.ping((error, result) => {
                if (error) {
                    throw new HttpException({
                        errorCode: HttpStatus.NOT_FOUND,
                        message: "Redis Healthcheck Exception"
                    }, HttpStatus.BAD_REQUEST)
                } else {
                    console.log("REDIS PING RESULT => ", result);
                    resolve(result);
                }
            });
        });
    }

    public defaultIndex() {
        try {
            const client = this.redisConnection.connect();
            client.select(RedisIndexes.DEFAULT);
            return client;
        } catch (error) {
            throw error;
        }
    }

    public selectIndex(indexNumber: number) {
        try {
            const client = this.redisConnection.connect();
            client.select(indexNumber);
            return client;
        } catch (error) {
            throw error;
        }
    }

    public sessionIndex() {
        try {
            const client = this.redisConnection.connect();
            client.select(RedisIndexes.SESSION);
            return client;
        } catch (error) {
            throw error;
        }
    }

    public transactionalIndex() {
        try {
            const client = this.redisConnection.connect();
            client.select(RedisIndexes.TRANSACTIONAL);
            return client;
        } catch (error) {
            throw error;
        }
    }

    public modelIndex() {
        try {
            const client = this.redisConnection.connect();
            client.select(RedisIndexes.MODEL);
            return client;
        } catch (error) {
            throw error;
        }
    }
}
