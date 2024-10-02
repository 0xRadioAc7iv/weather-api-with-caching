import { createClient } from "redis";
import { REDIS_PASSWORD } from "./config.js";

export const redisClient = createClient({
  password: REDIS_PASSWORD,
  socket: {
    host: "redis-10223.c264.ap-south-1-1.ec2.redns.redis-cloud.com",
    port: 10223,
  },
});
