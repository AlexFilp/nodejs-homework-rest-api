const { httpErrorFunc } = require("../utils/HttpError");

const validateBody = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      next(httpErrorFunc(400, error.message));
    }
    next();
  };
};

module.exports = validateBody;
