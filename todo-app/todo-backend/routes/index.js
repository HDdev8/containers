const express = require("express");
const configs = require("../util/config");

const router = express.Router();

/* GET index data. */
router.get("/", async (req, res) => {
  res.send({
    ...configs,
  });
});

module.exports = router;
