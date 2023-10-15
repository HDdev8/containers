const globalErrorHandler = (err, req, res, next) => {
  const error = {
    statusCode: err.statusCode || 500,
    status: err.status || "error",
    message: err.message || "error",
    stack: err.stack,
  };

  res.status(error.statusCode).json(error);
};
module.exports = globalErrorHandler;
