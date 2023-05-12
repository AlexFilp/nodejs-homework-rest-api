const express = require("express");
const {
  getContacts,
  addContact,
  getContactById,
  removeContact,
  updateContact,
} = require("../../controllers/contactsControllers");

const router = express.Router();

router.route("/").get(getContacts).post(addContact);
// router
//   .route("/:id")
//   .get(getContactById)
//   .delete(removeContact)
//   .put(updateContact);

module.exports = router;
