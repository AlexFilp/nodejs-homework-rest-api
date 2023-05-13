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
const { schemas } = require("../../service/schemas/contact");

const router = express.Router();

router
  .route("/")
  .get(getContacts)
  .post(validateBody(schemas.SchemaForAdd), addContact);

router
  .route("/:id")
  .get(isValidId, getContactById)
  .put(isValidId, validateBody(schemas.SchemaForUpdate), updateContact)
  .delete(isValidId, removeContact);

router
  .route("/:id/favorite")
  .patch(
    isValidId,
    validateBody(schemas.SchemaForUpdateFavorite),
    updateStatusContact
  );

module.exports = router;
