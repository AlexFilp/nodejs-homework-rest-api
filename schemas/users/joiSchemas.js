const Joi = require("joi");

const emailRegexp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

const registerSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required().messages({
    "any.required": "Email is a required field",
    "string.pattern.base": "Incorrect type of email",
    "string.empty": "Email is not allowed to be empty",
  }),
  password: Joi.string().min(6).required().messages({
    "any.required": "Password is a required field",
    "string.min": "Password length must be at least {{#limit}} characters long",
    "string.empty": "Password is not allowed to be empty",
  }),
});

const loginSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required().messages({
    "any.required": "Email is a required field",
    "string.pattern.base": "Incorrect type of email",
    "string.empty": "Email is not allowed to be empty",
  }),
  password: Joi.string().min(6).required().messages({
    "any.required": "Password is a required field",
    "string.min": "Password length must be at least {{#limit}} characters long",
    "string.empty": "Password is not allowed to be empty",
  }),
});

const joiSchemas = {
  registerSchema,
  loginSchema,
};

module.exports = joiSchemas;
