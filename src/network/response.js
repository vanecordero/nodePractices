const responseStatus = {
  200: "Everything OKAY",
  201: "Created correctly",
  202: "Accepted",
  203: "Non-Authotitative Information",
  204: "Not content",
  205: "Reset Content",
  400: "Bad request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not found",
  405: "Method not allowed",
  500: "Internal error",
  501: "Not implemented",
  502: "Bad gatway",
  503: "Service unvailable",
};

exports.success = function (req, res, message, status) {
  res.status(status || 200).send({
    error: "",
    body: message,
  });
};

exports.error = function (req, res, message, status, details) {
  console.log("[Response error]", details);
  res.status(status || 500).send({
    error: message,
    body: "",
  });
};
