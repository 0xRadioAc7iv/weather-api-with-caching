import { configDotenv } from "dotenv";
import env from "env-var";

configDotenv();

export const PORT = env.get("PORT").default(3000).asPortNumber();

export const WEATHER_API_KEY = env
  .get("VISUAL_CROSSING_WEATHER_API_KEY")
  .required()
  .asString();

export const REDIS_PASSWORD = env.get("REDIS_PASSWORD").required().asString();
