const {client} = require("../redis/db");

const countRequests = async (req, res, next) => {
  if (req.method === "POST" && res.statusCode === 200) {
    try {
      let todos_added = await client.get("todos_added");
      if (!todos_added) {
        await client.set("todos_added", 0);
      }
      await client.incrBy("todos_added", 1);
    } catch (err) {
      console.log(`Error setting redis value: ${err}`);
    }
  }
  next();
};

module.exports = countRequests;
