import { createClient, RedisClientType } from "redis";

const redis: RedisClientType = createClient( { url: process.env.REDIS_URL } );