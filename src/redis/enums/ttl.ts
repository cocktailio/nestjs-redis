export enum RedisTTL {
    EXPIRE = 'EX',
    ONE_SECOND = 1,
    FIVE_SECONDS = 5,
    TEN_SECONDS = 10,
    THIRTY_SECONDS = 30,
    ONE_MINUTE = 60,
    FIVE_MINUTES = 300,
    TEN_MINUTES = 600,
    THIRTY_MINUTES = 1800,
    ONE_HOUR = 3600,
    TWO_HOURS = 7200,
    SIX_HOURS = 21600,
    TWELVE_HOURS = 43200,
    ONE_DAY = 86400,
    TWO_DAYS = 172800,
    ONE_WEEK = 604800,
    TWO_WEEKS = 1209600,
    ONE_MONTH = 2592000,
    //add another ttl options
}