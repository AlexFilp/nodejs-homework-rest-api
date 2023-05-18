const express = require("express");
const { register, login } = require("../../controllers/usersControllers");

const router = express.Router();

const { validateBody } = require("../../middlewares");
const { joiSchemas } = require("../../schemas/users");

router.post("/register", validateBody(joiSchemas.registerSchema), register);

router.post("/login", validateBody(joiSchemas.loginSchema), login);

module.exports = router;
