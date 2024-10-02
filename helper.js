import { WEATHER_API_KEY } from "./config.js";

export async function fetchWeatherData(location) {
  return await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&include=current&key=${WEATHER_API_KEY}&contentType=json`
  );
}
