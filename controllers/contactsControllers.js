const {
  listContactsService,
  getContactByIdService,
  removeContactService,
  addContactService,
  updateContactService,
} = require("../models/contacts");

const cntrlWrapper = require("../utils/cntrlWrapper");

const listContacts = async (req, res) => {
  const contacts = await listContactsService();
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
  res.status(200).json({ message: "contact deleted" });
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
  listContacts: cntrlWrapper(listContacts),
  getContactById: cntrlWrapper(getContactById),
  removeContact: cntrlWrapper(removeContact),
  addContact: cntrlWrapper(addContact),
  updateContact: cntrlWrapper(updateContact),
};
