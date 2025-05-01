const { check } = require("express-validator");
const users = require("../../repositories/users");

module.exports = {
  requireEmail: check("Email")
    .trim()
    .normalizeEmail()
    .isEmail()
    .withMessage("invalid Email")
    .custom(async (Email) => {
      const existingUser = await users.getOneBy({ Email });

      if (existingUser) {
        throw new Error("Email is use");
      }
    }),
  requirePassword: check("Password")
    .trim()
    .isLength({
      min: 4,
      max: 20,
    })
    .withMessage("Must be between 4 and 20 characters"),
  requirePasswordConfirmation: check("PasswordConfirmation")
    .trim()
    .isLength({
      min: 4,
      max: 20,
    })
    .withMessage("Must be between 4 and 20 characters")
    .custom((PasswordConfirmation, { req }) => {
      if (req.body.Password !== PasswordConfirmation) {
        throw new Error("Passwords must match ");
      }
    }),
};
