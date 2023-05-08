const fs = require("fs/promises");
const path = require("path");
const crypto = require("crypto");
const { HttpError } = require("../utils/HttpError");
const Joi = require("joi");

const schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
});

const contactsPath = path.join(process.cwd(), "models/contacts.json");

const listContactsService = async () => {
  const contacts = await fs.readFile(contactsPath);
  return JSON.parse(contacts);
};

const getContactByIdService = async (contactId) => {
  const contacts = await listContactsService();
  const contactById = contacts.find((contact) => contact.id === contactId);
  if (!contactById) {
    throw new HttpError(404, "Not found");
  }
  return contactById;
};

const removeContactService = async (contactId) => {
  const contacts = await listContactsService();
  const index = contacts.findIndex((contact) => contact.id === contactId);
  if (index === -1) {
    throw new HttpError(404, "Not found");
  }
  const [deletedContact] = contacts.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return deletedContact;
};

const addContactService = async (body) => {
  const contacts = await listContactsService();
  const { error } = schema.validate(body);
  if (error) {
    throw new HttpError(400, error.message);
  }
  const newContact = { id: crypto.randomUUID(), ...body };
  contacts.push(newContact);
  fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
};

const updateContactService = async (contactId, body) => {
  const contacts = await listContactsService();
  const updatedContact = contacts.find((contact) => contact.id === contactId);
  if (!updatedContact) {
    throw new HttpError(404, "Not found");
  }
  if (!body.name && !body.email && !body.phone) {
    throw new HttpError(400, "Missing fields");
  }
  updatedContact.name = body.name || updatedContact.name;
  updatedContact.email = body.email || updatedContact.email;
  updatedContact.phone = body.phone || updatedContact.phone;
  fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return updatedContact;
};

module.exports = {
  listContactsService,
  getContactByIdService,
  removeContactService,
  addContactService,
  updateContactService,
};
