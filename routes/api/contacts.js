const express = require("express");
const {
  getContacts,
  addContact,
  getContactById,
  updateContact,
  updateStatusContact,
  removeContact,
} = require("../../controllers/contactsControllers");

const { validateBody, isValidId, authenticate } = require("../../middlewares");
const { joiSchemas } = require("../../schemas/contacts");

const router = express.Router();

router
  .route("/")
  .get(authenticate, getContacts)
  .post(authenticate, validateBody(joiSchemas.schemaForAdd), addContact);

router
  .route("/:id")
  .get(authenticate, isValidId, getContactById)
  .put(
    authenticate,
    isValidId,
    validateBody(joiSchemas.schemaForUpdate),
    updateContact
  )
  .delete(authenticate, isValidId, removeContact);

router
  .route("/:id/favorite")
  .patch(
    authenticate,
    isValidId,
    validateBody(joiSchemas.schemaForUpdateFavorite),
    updateStatusContact
  );

module.exports = router;
