const express = require("express");
const redis = require("redis");
const session = require("express-session");
const connectRedis = require("connect-redis").default;
const appRoute = require("./routes");
const sessionMiddleware = require("./middleware/session");
const { redisConfig } = require("./database/redis");
const corsMiddlware = require("./middleware/cors");

const app = express();

//if you run under a proxy e.g NGINX
app.set("trust proxy", 1);

app.use(express.json());
app.options("*", corsMiddlware);
app.use(corsMiddlware);
// initializing client
let redisClient = redisConfig(6379, "localhost");
redisClient.connect().catch(console.error);

// initializing store
const RedisStore = new connectRedis({
  client: redisClient,
  prefix: "myapp:",
});

// Initialize sesssion storage.
app.use(sessionMiddleware(RedisStore));

app.use(appRoute);
app.listen(8080, () => console.log("server is running on port 8080"));
