const { isValidObjectId } = require("mongoose");
const { httpErrorFunc } = require("../utils");

const isValidId = (req, res, next) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    next(httpErrorFunc(400, `${id} is not valid id`));
  }
  next();
};

module.exports = isValidId;
