Weather API with Redis Caching
==============================

This project is a simple **Node.js** and **Express** application that fetches weather data from the [Visual Crossing Weather API](https://www.visualcrossing.com/weather-api), caches the results using **Redis**, and returns the current weather conditions for a requested location. Caching is used to improve performance by reducing the number of API calls.

Features
--------

*   Fetches weather data using Visual Crossing API.
*   Caches weather data using Redis for 30 minutes.
*   Returns cached data if available (with an `X-Cache` header to indicate cache status).
*   Uses environment variables for configuration (API key, Redis password, etc.).

Prerequisites
-------------

*   Node.js (v20 or above)
*   Redis
*   Visual Crossing Weather API key (available from [here](https://www.visualcrossing.com/weather-api))
*   Redis Cloud credentials (or a local Redis instance)

Installation
------------

1.  Clone the repository:

    ```bash
    git clone https://github.com/0xRadioAc7iv/weather-api-with-caching
    ```

3.  Navigate to the project directory:

    ```bash
    cd weather-api-with-caching
    ```

5.  Install dependencies:

    ```bash
    npm install
    ```

7.  Create a `.env` file based on the `.env.example` file:

    ```bash
    cp .env.example .env
    ```

9.  Edit the `.env` file and add your Visual Crossing Weather API key and Redis password:

    VISUAL_CROSSING_WEATHER_API_KEY=<your_api_key>
    REDIS_PASSWORD=<your_redis_password>

Usage
-----

1.  Start the server:

    ```bash
    npm start
    ```

3.  Make a GET request to fetch weather data for a specific location:

    GET /weather/:location

For example:

    GET /weather/London

The response will include the current weather conditions for the location, with an `X-Cache` header that indicates whether the data came from the cache or was freshly fetched.

Environment Variables
---------------------

The following environment variables are required:

*   `PORT` (optional) - The port the server will run on (defaults to 3000).
*   `VISUAL_CROSSING_WEATHER_API_KEY` (required) - Your Visual Crossing Weather API key.
*   `REDIS_PASSWORD` (required) - The password for your Redis instance.

Code Structure
--------------

*   `index.js` - Main application entry point, sets up Express server and Redis client, defines routes.
*   `helper.js` - Contains the function to fetch weather data from the Visual Crossing API.
*   `config.js` - Handles configuration and environment variables.
*   `redis.js` - Configures and initializes the Redis client.
*   `.env.example` - Example environment configuration file.

Redis Caching
-------------

The application uses Redis to cache weather data for 30 minutes. This helps reduce the number of requests made to the external API and improves the application's performance. Cached responses are returned when available, indicated by the `X-Cache: HIT` header. If the data is not cached, the application fetches fresh data from the API and caches it with an `X-Cache: MISS` header.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request on GitHub.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## Project URL

[https://roadmap.sh/projects/weather-api-wrapper-service](https://roadmap.sh/projects/weather-api-wrapper-service)
