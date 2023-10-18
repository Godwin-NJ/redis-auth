const redis = require("redis");

const redisConfig = (port, host) => {
  return redis.createClient({
    port: port, //6379
    host: host, //"localhost",
  });
};

module.exports = {
  redisConfig,
};
