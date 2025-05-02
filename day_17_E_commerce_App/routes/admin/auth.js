const express = require("express");
const { validationResult } = require("express-validator");

const users = require("../../repositories/users");
const signupTemplate = require("../../views/admin/auth/signup");
const signinTemplate = require("../../views/admin/auth/signin");
const {
  requireEmail,
  requirePassword,
  requirePasswordConfirmation,
  requireSignInEmail,
  requireSignInPassword,
} = require("./validators");

const router = express.Router();

router.get("/signup", (req, res) => {
  res.send(signupTemplate({ req }));
});

router.post(
  "/signup",
  [requireEmail, requirePassword, requirePasswordConfirmation],
  async (req, res) => {
    const { Email, Password, PasswordConfirmation } = req.body;
    const err = validationResult(req);
    if (!err.isEmpty()) {
      return res.send(signupTemplate({ req, err }));
    }

    const user = await users.create({ Email, Password });
    req.session.userId = user.id;
    res.send("done");
  }
);
router.get("/signout", (req, res) => {
  req.session = null;
  res.send("now you are sign out");
});

router.get("/signin", (req, res) => {
  res.send(signinTemplate());
});

router.post(
  "/signin",
  [requireSignInEmail, requireSignInPassword],
  async (req, res) => {
    const err = validationResult(req);
    console.log(err);

    const { Email } = req.body;

    const user = await users.getOneBy({ Email });

    req.session.userId = user.id;

    res.send("done you are in");
  }
);

module.exports = router;
