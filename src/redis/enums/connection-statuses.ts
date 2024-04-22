export enum RedisConnectionStatuses {
    CONNECT = 'connect',
    READY = 'ready',
    RECONNECTING = 'reconnecting',
    ERROR = 'error',
    END = 'end',
    CLOSE = 'close',
}