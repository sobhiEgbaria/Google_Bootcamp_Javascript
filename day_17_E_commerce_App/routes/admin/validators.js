const { check } = require("express-validator");
const users = require("../../repositories/users");

module.exports = {
  requireEmail: check("Email")
    .trim()
    .normalizeEmail()
    .isEmail()
    .withMessage("invalid Email")
    .custom(async (Email) => {
      const user = await users.getOneBy({ Email });
      if (user) {
        throw new Error("Email is use");
      }
    }),
  requirePassword: check("Password")
    .trim()
    .isLength({ min: 4, max: 20 })
    .withMessage("Must be between 4 and 20 characters"),
  requirePasswordConfirmation: check("PasswordConfirmation")
    .trim()
    .isLength({ min: 4, max: 20 })
    .withMessage("Must be between 4 and 20 characters")
    .custom(async (PasswordConfirmation, { req }) => {
      if (PasswordConfirmation !== req.body.Password) {
        throw new Error("Passwords must match ");
      }
    }),

  requireSignInEmail: check("Email")
    .trim()
    .normalizeEmail()
    .isEmail()
    .withMessage("invalid Email")
    .custom(async (Email) => {
      const user = await users.getOneBy({ Email });

      if (!user) {
        throw new Error("Email not found");
      }
    }),

  requireSignInPassword: check("Password")
    .trim()
    .custom(async (Password, { req }) => {
      const user = await users.getOneBy({ Email: req.body.Email });
      if (!user) {
        throw new Error("invalid password");
      }
      const validPassword = await users.comparePassword(
        user.Password,
        Password
      );
      if (!validPassword) {
        throw new Error("invalid password");
      }
    }),
};
