const express = require("express");
const logger = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const globalErrorHandler = require("./middleware/globalErrorHandler");
const countRequests = require("./middleware/countRequests");
const indexRouter = require("./routes/index");
const todosRouter = require("./routes/todos");
const statisticsRouter = require("./routes/statistics");

const app = express();

app.use(helmet());
app.use(cors());

app.use(logger("dev"));
app.use(express.json());

app.use("/", indexRouter);
app.use("/todos", countRequests, todosRouter);
app.use("/statistics", statisticsRouter);

app.use(async (req, res, next) => {
  const error = new Error("Not found");
  error.statusCode = 404;
  next(error);
});

app.use(globalErrorHandler);

module.exports = app;
