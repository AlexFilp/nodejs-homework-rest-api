const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { SD_API_KEY } = process.env;

sgMail.setApiKey(SD_API_KEY);

const sendEmail = async (data) => {
  const email = { ...data, from: "alexfilp17@gmail.com" };
  await sgMail.send(email);
  return true;
};

module.exports = sendEmail;
