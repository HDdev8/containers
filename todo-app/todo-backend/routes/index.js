const express = require("express");
const router = express.Router();
const configs = require("../util/config");

/* GET index data. */
router.get("/", async (req, res) => {
  res.send({
    ...configs,
  });
});

module.exports = router;
