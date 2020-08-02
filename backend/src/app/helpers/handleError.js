const STATUS_CODE_OK = 200;
const STATUS_CODE_BAD_REQUEST = 400;
const STATUS_CODE_UNAUTHORIZED = 401;
const STATUS_CODE_NOT_FOUND = 404;
const STATUS_CODE_SERVER_ERROR = 500;
let response = {};
module.exports = class Response {
  jsonOk = function (data, message, metadata) {
    message = message ? message : "Successful request";
    metadata = metadata ? metadata : {};
    const status = STATUS_CODE_OK;
    return (response = { message, data, metadata, status });
  };

  jsonBadRequest = function (data, message, metadata) {
    message = message ? message : "Bad request";
    metadata = metadata ? metadata : {};

    const status = STATUS_CODE_BAD_REQUEST;
    return (response = {
      message,
      data,
      metadata,
      status,
    });
  };

  jsonUnathorized = function (data, message, metadata) {
    message = message ? message : "Unathorized";
    metadata = metadata ? metadata : {};

    const status = STATUS_CODE_UNAUTHORIZED;
    return (response = {
      message,
      data,
      metadata,
      status: STATUS_CODE_UNAUTHORIZED,
    });
  };

  jsonNotFound = function (data, message, metadata) {
    message = message ? message : "Not found";
    metadata = metadata ? metadata : {};

    const status = STATUS_CODE_NOT_FOUND;
    return (response = {
      message,
      data,
      metadata,
      status: STATUS_CODE_NOT_FOUND,
    });
  };

  jsonServerError = function (data, message, metadata) {
    message = message ? message : "Internal error";
    metadata = metadata ? metadata : {};

    return (response = {
      message,
      data,
      metadata,
      status: STATUS_CODE_SERVER_ERROR,
    });
  };
};