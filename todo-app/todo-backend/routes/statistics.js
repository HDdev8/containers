const express = require("express");
const {client} = require("../redis/db");

const router = express.Router();

/* GET todos_added count. */
router.get("/", async (req, res) => {
  try {
    let todos_added = await client.get("todos_added");
    if (!todos_added) {
      todos_added = 0;
      res.json(JSON.parse(todos_added));
    } else res.json(JSON.parse(todos_added));
  } catch (err) {
    console.log("Error getting todos_added count", err);
    return res.status(400).json(err.stack);
  }
});

module.exports = router;
