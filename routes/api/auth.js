const express = require("express");
const {
  register,
  login,
  getCurrent,
  updateSubscription,
  updateAvatar,
  verifyEmail,
  resentVerifyEmail,
  logOut,
} = require("../../controllers/usersControllers");

const router = express.Router();

const { validateBody, authenticate, upload } = require("../../middlewares");
const { joiSchemas } = require("../../schemas/users");

router.post(
  "/auth/register",
  validateBody(joiSchemas.registerSchema),
  register
);

router.post("/auth/login", validateBody(joiSchemas.loginSchema), login);

router.get("/auth/current", authenticate, getCurrent);

router.patch(
  "/users",
  authenticate,
  validateBody(joiSchemas.updateSubscriptionSchema),
  updateSubscription
);

router.patch(
  "/users/avatars",
  authenticate,
  upload.single("avatar"),
  updateAvatar
);

router.get("/auth/verify/:verificationToken", verifyEmail);

router.post(
  "/users/verify",
  validateBody(joiSchemas.verifyEmailSchema),
  resentVerifyEmail
);

router.post("/auth/logout", authenticate, logOut);

module.exports = router;
