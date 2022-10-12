const express = require("express");

//controllers
const { sendEmail } = require("../controllers/emails.controller");
//validators
const {
  sendEmailValidators,
} = require("../middlewares/validators.middlewares");

const emailsRouter = express.Router();

emailsRouter.post("/", sendEmailValidators, sendEmail);

module.exports = { emailsRouter };
