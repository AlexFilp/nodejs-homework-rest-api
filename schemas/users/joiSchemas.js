const Joi = require("joi");

const emailRegexp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

const registerSchema = Joi.object({
  email: Joi.string()
    .pattern(emailRegexp)
    .required()
    .messages({ "string.pattern.base": "Incorrect type of email" }),
  password: Joi.string().min(6).required().messages({
    "string.min": "Password length must be at least {{#limit}} characters long",
  }),
});

const loginSchema = Joi.object({
  email: Joi.string()
    .pattern(emailRegexp)
    .required()
    .messages({ "string.pattern.base": "Incorrect type of email" }),
  password: Joi.string().min(6).required().messages({
    "string.min": "Password length must be at least {{#limit}} characters long",
  }),
});

const joiSchemas = {
  registerSchema,
  loginSchema,
};

module.exports = joiSchemas;
