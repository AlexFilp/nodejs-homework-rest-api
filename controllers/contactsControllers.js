const {
  getContactsService,
  getContactByIdService,
  removeContactService,
  addContactService,
  updateContactService,
} = require("../models/contacts");

const { controllerWrapper } = require("../utils/index");

const getContacts = async (req, res) => {
  const contacts = await getContactsService();
  res.status(200).json(contacts);
};

const getContactById = async (req, res) => {
  const { id } = req.params;
  const contactById = await getContactByIdService(id);
  res.status(200).json(contactById);
};

const removeContact = async (req, res) => {
  const { id } = req.params;
  await removeContactService(id);
  res.status(200).json({ message: `contact with id "${id}" deleted` });
};

const addContact = async (req, res) => {
  const newContact = await addContactService(req.body);
  res.status(201).json(newContact);
};

const updateContact = async (req, res) => {
  const { id } = req.params;
  const updatedContact = await updateContactService(id, req.body);
  res.status(200).json(updatedContact);
};

module.exports = {
  getContacts: controllerWrapper(getContacts),
  getContactById: controllerWrapper(getContactById),
  removeContact: controllerWrapper(removeContact),
  addContact: controllerWrapper(addContact),
  updateContact: controllerWrapper(updateContact),
};
