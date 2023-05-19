const Joi = require("joi");

const phoneRegexp = /^\(\d{2,3}\)\s?\d{3}-\d{4}$/;

const schemaForAdd = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string()
    .pattern(phoneRegexp)
    .required()
    .messages({
      "string.pattern.base":
        "Incorect phone type. Try to type for example: (123) 123-1234",
    }),
  favorite: Joi.boolean(),
});
const schemaForUpdate = Joi.object({
  name: Joi.string(),
  email: Joi.string(),
  phone: Joi.string()
    .pattern(phoneRegexp)
    .messages({
      "string.pattern.base":
        "Incorect phone type. Try to type for example: (123) 123-1234",
    }),
  favorite: Joi.boolean(),
});

const schemaForUpdateFavorite = Joi.object({
  favorite: Joi.boolean().required(),
});

const joiSchemas = {
  schemaForAdd,
  schemaForUpdate,
  schemaForUpdateFavorite,
};

module.exports = joiSchemas;
