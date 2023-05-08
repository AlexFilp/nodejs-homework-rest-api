const controllerWrapper = (cntrl) => {
  return async (req, res, next) => {
    try {
      await cntrl(req, res, next);
    } catch (error) {
      console.log("error ==>", error);
      next(error);
    }
  };
};

module.exports = controllerWrapper;
