const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const { handleMongooseSchemaErr } = require("../../utils");

const phoneRegexp = /^\(\d{2,3}\)\s?\d{3}-\d{4}$/;

const contactSchema = new Schema(
  {
    name: {
      type: String,
      minlength: 2,
      maxlength: 30,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
      minlength: 5,
      maxlength: 30,
      required: [true, "Set email for contact"],
    },
    phone: {
      type: String,
      minlength: 10,
      maxlength: 15,
      unique: true,
      match: [
        phoneRegexp,
        "Incorect phone type. Try to type for example: (123) 123-1234",
      ],
      required: [true, "Set phone number for contact"],
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

contactSchema.post("save", handleMongooseSchemaErr);

const Contact = mongoose.model("contact", contactSchema);

module.exports = Contact;
