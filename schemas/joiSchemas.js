const Joi = require("joi");

const schemaForAdd = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean(),
});
const schemaForUpdate = Joi.object({
  name: Joi.string(),
  email: Joi.string(),
  phone: Joi.string(),
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
