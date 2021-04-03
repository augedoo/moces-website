const errorHandler = require('../middleware/error');

class ErrorResponse extends Error {
  constructor(message, statusCode) {
    super(message); // pass our custom message to the message property of the extended Error class.
    this.statusCode = statusCode;
  }
}

module.exports = ErrorResponse;
