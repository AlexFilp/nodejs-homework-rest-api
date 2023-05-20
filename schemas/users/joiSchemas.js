const Joi = require("joi");

const registerSchema = Joi.object({
  email: Joi.string().email().required().messages({
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
  email: Joi.string().email().required().messages({
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

const updateSubscriptionSchema = Joi.object({
  subscription: Joi.boolean()
    .valid("starter", "pro", "business")
    .required()
    .messages({
      "any.required": "Favorite is a required field",
    }),
});

const joiSchemas = {
  registerSchema,
  loginSchema,
  updateSubscriptionSchema,
};

module.exports = joiSchemas;
