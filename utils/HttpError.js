class HttpError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
  }
}

// const HttpError = (statusCode, message) => {
//   const error = new Error(message);
//   error.status = statusCode;
//   return error;
// };

module.exports = {
  HttpError,
};
