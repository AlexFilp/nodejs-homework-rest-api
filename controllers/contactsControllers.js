const { Contact } = require("../service/schemas/contact");
const { HttpError } = require("../utils");

const { controllerWrapper } = require("../utils");

const getContacts = async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
};

const addContact = async (req, res) => {
  const newContact = await Contact.create(req.body);
  res.status(201).json(newContact);
};

const getContactById = async (req, res) => {
  const { id } = req.params;
  const contactById = await Contact.findById(id);
  if (!contactById) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json(contactById);
};

const updateContact = async (req, res) => {
  const { id } = req.params;
  const updatedContact = await Contact.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!updatedContact) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json(updatedContact);
};

const updateStatusContact = async (req, res) => {
  const { id } = req.params;
  const updatedContact = await Contact.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!updatedContact) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json(updatedContact);
};

const removeContact = async (req, res) => {
  const { id } = req.params;
  const removedContact = await Contact.findByIdAndRemove(id);
  if (!removedContact) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json({ message: `contact with id "${id}" deleted` });
};

module.exports = {
  getContacts: controllerWrapper(getContacts),
  addContact: controllerWrapper(addContact),
  getContactById: controllerWrapper(getContactById),
  updateContact: controllerWrapper(updateContact),
  updateStatusContact: controllerWrapper(updateStatusContact),
  removeContact: controllerWrapper(removeContact),
};
