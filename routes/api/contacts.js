const express = require("express");
const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
} = require("../../controllers/contactsControllers");

const router = express.Router();

router.route("/").get(listContacts).post(addContact);
router
  .route("/:id")
  .get(getContactById)
  .delete(removeContact)
  .put(updateContact);

module.exports = router;

// router.get("/", async (req, res, next) => {
//   res.json({ message: "homework" });
// });

// router.get("/:contactId", async (req, res, next) => {
//   res.json({ message: "template message" });
// });

// router.post("/", async (req, res, next) => {
//   res.json({ message: "template message" });
// });

// router.delete("/:contactId", async (req, res, next) => {
//   res.json({ message: "template message" });
// });

// router.put("/:contactId", async (req, res, next) => {
//   res.json({ message: "template message" });
// });
