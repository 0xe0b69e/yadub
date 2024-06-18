import { createClient, RedisClientType } from "redis";

const redis: RedisClientType = createClient( { url: process.env.REDIS_URL } );

redis.connect().then( (): void => {} );

export default redis;