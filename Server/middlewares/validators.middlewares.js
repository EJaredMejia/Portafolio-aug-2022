const { body, validationResult } = require("express-validator");

// Utils
const { AppError } = require("../utils/appError.util");

const checkValidations = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    // [{ ..., msg }] -> [msg, msg, ...] -> 'msg. msg. msg. msg'
    const errorMessages = errors.array().map((err) => err.msg);

    const message = errorMessages.join(". ");

    return next(new AppError(message, 400));
  }

  next();
};

const sendEmailValidators = [
  body("title")
    .notEmpty()
    .withMessage("title must not be empty")
    .isString()
    .withMessage("title must be an string"),
  body("message")
    .notEmpty()
    .withMessage("message must not be empty")
    .isString()
    .withMessage("message must be an string"),
  body("email")
    .notEmpty()
    .withMessage("email must not be empty")
    .isEmail()
    .withMessage("email must be a valid email"),
  checkValidations,
];

module.exports = { sendEmailValidators };
