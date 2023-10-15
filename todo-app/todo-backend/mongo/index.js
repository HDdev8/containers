const mongoose = require("mongoose");
const Todo = require("./models/Todo");
const {MONGO_URL} = require("../util/config");

const connect = async () => {
  if (!MONGO_URL) {
    console.log("MongoDB is disabled");
    return null;
  }

  if (MONGO_URL && !mongoose.connection.readyState) {
    try {
      mongoose.connect(MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true});
      mongoose.connection.on("error", (err) => {
        console.error(`Mongoose connection error: ${err}`);
      });
      console.log("Connected to MongoDB");
    } catch (error) {
      console.error(`Error connecting to MongoDB: ${error}`);
      return null;
    }
  }
};

connect();

module.exports = {
  Todo,
};
