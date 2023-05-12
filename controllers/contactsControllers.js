const Contact = require("../service/schemas/contact");

const { controllerWrapper } = require("../utils");

const getContacts = async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
};

const addContact = async (req, res) => {
  const newContact = await Contact.create(req.body);
  res.status(201).json(newContact);
};

// const getContactById = async (req, res) => {
//   const { id } = req.params;
//   const contactById = await getContactByIdService(id);
//   res.status(200).json(contactById);
// };

// const removeContact = async (req, res) => {
//   const { id } = req.params;
//   await removeContactService(id);
//   res.status(200).json({ message: `contact with id "${id}" deleted` });
// };

// const updateContact = async (req, res) => {
//   const { id } = req.params;
//   const updatedContact = await updateContactService(id, req.body);
//   res.status(200).json(updatedContact);
// };

module.exports = {
  getContacts: controllerWrapper(getContacts),
  addContact: controllerWrapper(addContact),
  // getContactById: controllerWrapper(getContactById),
  // removeContact: controllerWrapper(removeContact),
  // updateContact: controllerWrapper(updateContact),
};
