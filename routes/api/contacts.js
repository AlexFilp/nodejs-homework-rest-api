const express = require("express");
const {
  getContacts,
  addContact,
  getContactById,
  updateContact,
  updateStatusContact,
  removeContact,
} = require("../../controllers/contactsControllers");

const { validateBody, isValidId } = require("../../middlewares");
const { joiSchemas } = require("../../schemas");

const router = express.Router();

router
  .route("/")
  .get(getContacts)
  .post(validateBody(joiSchemas.schemaForAdd), addContact);

router
  .route("/:id")
  .get(isValidId, getContactById)
  .put(isValidId, validateBody(joiSchemas.schemaForUpdate), updateContact)
  .delete(isValidId, removeContact);

router
  .route("/:id/favorite")
  .patch(
    isValidId,
    validateBody(joiSchemas.schemaForUpdateFavorite),
    updateStatusContact
  );

module.exports = router;
