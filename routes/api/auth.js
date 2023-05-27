const express = require("express");
const {
  register,
  login,
  getCurrent,
  updateSubscription,
  updateAvatar,
  logOut,
} = require("../../controllers/usersControllers");

const router = express.Router();

const { validateBody, authenticate, upload } = require("../../middlewares");
const { joiSchemas } = require("../../schemas/users");

router.post("/register", validateBody(joiSchemas.registerSchema), register);

router.post("/login", validateBody(joiSchemas.loginSchema), login);

router.get("/current", authenticate, getCurrent);

router.patch(
  "/",
  authenticate,
  validateBody(joiSchemas.updateSubscriptionSchema),
  updateSubscription
);

router.patch("/avatars", authenticate, upload.single("avatar"), updateAvatar);

router.post("/logout", authenticate, logOut);

module.exports = router;
