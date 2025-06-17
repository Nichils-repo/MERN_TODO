import { Ratelimit } from "@upstash/ratelimit";
import rateLimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    const { success } = await rateLimit.limit("my-rate-limit");

    if (!success) {
      return res.status(429).json({
        message: "too many requests, try after a while",
      });
    }
    next();
  } catch (error) {
    console.error("rate limit error", error);
    next(error);
  }
};

export default rateLimiter;
