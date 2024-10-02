import express from "express";
import { PORT } from "./config.js";
import { redisClient } from "./redis.js";
import { fetchWeatherData } from "./helper.js";

const app = express();
app.use(express.json());

// Sends response with current weather data of the requested location
app.get("/weather/:location", async (request, response) => {
  const location = request.params.location;

  const cachedData = await redisClient.get(location);
  if (cachedData) {
    response.header("X-Cache", "HIT");
    return response.json(JSON.parse(cachedData));
  }

  const queryResponse = await fetchWeatherData(location);
  const data = await queryResponse.json();
  const dataToSend = data.currentConditions;

  await redisClient.set(location, JSON.stringify(dataToSend));
  await redisClient.expire(location, 1800); // Set Expiration time to 1800 Seconds == 30 Minutes

  response.header("X-Cache", "MISS");
  return response.json(dataToSend);
});

async function startServer() {
  try {
    await redisClient.connect();
    console.log("\nRedis Connected");

    app.listen(PORT, () => {
      console.log(`Server started at PORT: ${PORT}\n`);
    });
  } catch (error) {
    console.error(`\nError starting the server: ${error}\n`);
    await redisClient.disconnect();
    process.exit(1);
  }
}

startServer();
