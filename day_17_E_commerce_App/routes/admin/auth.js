const express = require("express");
const { validationResult } = require("express-validator");

const users = require("../../repositories/users.js");
const signupTemplate = require("../../views/admin/auth/signup.js");
const signinTemplate = require("../../views/admin/auth/signin.js");
const {
  requireEmail,
  requirePassword,
  requirePasswordConfirmation,
} = require("./validators.js");

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

router.post("/signin", async (req, res) => {
  const { Email, Password } = req.body;

  const existingUser = await users.getOneBy({ Email });
  const validPassword = await users.comparePassword(
    existingUser.Password,
    Password
  );

  if (!existingUser) {
    return res.send("User dose not find");
  }
  if (!validPassword) {
    return res.send("Passwords not match ");
  }
  req.session.userId = existingUser.id;
  res.send("done you are in");
});

module.exports = router;
