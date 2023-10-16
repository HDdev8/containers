const path = require("node:path");
require("dotenv").config({path: path.resolve(__dirname, "../", ".env")});

const MONGO_URL = process.env.MONGO_URL;
const REDIS_URL = process.env.REDIS_URL;
const MONGO_INITDB_ROOT_USERNAME = process.env.MONGO_INITDB_ROOT_USERNAME;
const MONGO_INITDB_ROOT_PASSWORD = process.env.MONGO_INITDB_ROOT_PASSWORD;
const MONGO_INITDB_DATABASE = process.env.MONGO_INITDB_DATABASE;

module.exports = {
  MONGO_URL,
  REDIS_URL,
  MONGO_INITDB_ROOT_USERNAME,
  MONGO_INITDB_ROOT_PASSWORD,
  MONGO_INITDB_DATABASE,
};
