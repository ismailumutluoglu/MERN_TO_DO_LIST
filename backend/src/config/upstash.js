import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import dotenv from "dotenv"

dotenv.config()


// create a ratelimiter  that allows 10 request per 20seconds



// 10 saniyede 5 istek limiti
const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.fixedWindow(5, "10 s"),
    analytics: true,
});

export default ratelimit;