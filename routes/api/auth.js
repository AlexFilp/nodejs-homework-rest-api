const express = require("express");
const {
  register,
  login,
  getCurrent,
  updateSubscription,
  logOut,
} = require("../../controllers/usersControllers");

const router = express.Router();

const { validateBody, authenticate } = require("../../middlewares");
const { joiSchemas } = require("../../schemas/users");

router.post("/register", validateBody(joiSchemas.registerSchema), register);

router.post("/login", validateBody(joiSchemas.loginSchema), login);

router.get("/current", authenticate, getCurrent);

router.patch(
  "/users",
  authenticate,
  validateBody(joiSchemas.updateSubscriptionSchema),
  updateSubscription
);

router.post("/logout", authenticate, logOut);

module.exports = router;
