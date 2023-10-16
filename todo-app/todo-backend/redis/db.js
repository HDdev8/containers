const redis = require("redis");
const {REDIS_URL} = require("../util/config");

let client;

const connect = async () => {
  if (!REDIS_URL) {
    console.log("Redis is disabled");
    client = "Client disabled";
    return null;
  }
  if (REDIS_URL) {
    try {
      client = redis.createClient({
        url: REDIS_URL,
      });
      await client.on("connect", () => console.log("Connected to Redis"));
      await client.on("error", (error) => console.error("Redis connection error", error));
      await client.connect();
    } catch (error) {
      console.error(`Error connecting to Redis: ${error}`);
      client = "Client disabled";
      return null;
    }
  }
};

connect();

module.exports = {
  client,
};
