const { Contact } = require("../schemas/contacts");
const { HttpError, controllerWrapper } = require("../utils");

const getContacts = async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
};

const addContact = async (req, res) => {
  const { phone } = req.body;
  const contact = await Contact.findOne({ phone });
  if (contact) {
    throw new HttpError(409, "Contact with this phone number already exists!");
  }
  const newContact = await Contact.create(req.body);
  res.status(201).json(newContact);
};

const getContactById = async (req, res) => {
  const { id } = req.params;
  const contactById = await Contact.findById(id);
  if (!contactById) {
    throw new HttpError(404, "Not found");
  }
  res.status(200).json(contactById);
};

const updateContact = async (req, res) => {
  const { id } = req.params;
  const updatedContact = await Contact.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!updatedContact) {
    throw new HttpError(404, "Not found");
  }
  res.status(200).json(updatedContact);
};

const updateStatusContact = async (req, res) => {
  const { id } = req.params;
  const updatedContact = await Contact.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!updatedContact) {
    throw new HttpError(404, "Not found");
  }
  res.status(200).json(updatedContact);
};

const removeContact = async (req, res) => {
  const { id } = req.params;
  const removedContact = await Contact.findByIdAndRemove(id);
  if (!removedContact) {
    throw new HttpError(404, "Not found");
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
