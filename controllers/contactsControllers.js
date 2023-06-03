const { Contact } = require("../schemas/contacts");
const { HttpError, controllerWrapper } = require("../utils");

const getContacts = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 20, favorite } = req.query;
  const skip = (page - 1) * limit;

  const filter = {
    owner,
  };

  if (favorite === "true") {
    filter.favorite = true;
  } else if (favorite === "false") {
    filter.favorite = false;
  }

  const contacts = await Contact.find(filter, "-createdAt -updatedAt", {
    skip,
    limit,
  }).populate("owner", "email subscription");

  res.status(200).json(contacts);
};

const addContact = async (req, res) => {
  const { _id: owner } = req.user;
  const newContact = await Contact.create({ ...req.body, owner });
  res.status(201).json(newContact);
};

const getContactById = async (req, res) => {
  const { id } = req.params;
  const { _id: owner } = req.user;
  const contactById = await Contact.findOne({ _id: id, owner });
  if (!contactById) {
    throw new HttpError(404, "Not found");
  }
  res.status(200).json(contactById);
};

const updateContact = async (req, res) => {
  const { id } = req.params;
  const { _id: owner } = req.user;
  const updatedContact = await Contact.findByIdAndUpdate(
    { _id: id, owner },
    req.body,
    {
      new: true,
    }
  );
  if (!updatedContact) {
    throw new HttpError(404, "Not found");
  }
  res.status(200).json(updatedContact);
};

const updateStatusContact = async (req, res) => {
  const { id } = req.params;
  const { _id: owner } = req.user;
  const { favorite } = req.body;
  const updatedContact = await Contact.findByIdAndUpdate(
    { _id: id, owner },
    { favorite: favorite },
    {
      new: true,
    }
  );
  if (!updatedContact) {
    throw new HttpError(404, "Not found");
  }

  let message = null;
  if (favorite) {
    message = `You added contact ${updatedContact.name} to favorites.`;
  } else if (!favorite) {
    message = `You removed contact ${updatedContact.name} from favorites.`;
  }

  res.status(200).json({
    message,
    contact: updatedContact,
  });
};

const removeContact = async (req, res) => {
  const { _id: owner } = req.user;
  const { id } = req.params;
  const removedContact = await Contact.findByIdAndRemove({ _id: id, owner });
  if (!removedContact) {
    throw new HttpError(404, "Not found");
  }
  res.status(200).json({ message: `Contact with id ${id} deleted` });
};

module.exports = {
  getContacts: controllerWrapper(getContacts),
  addContact: controllerWrapper(addContact),
  getContactById: controllerWrapper(getContactById),
  updateContact: controllerWrapper(updateContact),
  updateStatusContact: controllerWrapper(updateStatusContact),
  removeContact: controllerWrapper(removeContact),
};
