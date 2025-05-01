const express = require("express");
const bodyParser = require("body-parser");
const users = require("./repositories/users.js");
const cookieSession = require("cookie-session");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["sobhisobhisobhi"] }));
app.get("/signup", (req, res) => {
  res.send(`
    ${req.session.userId}
    <form method="POST">
       <div>
        <input name = "Email" placeholder="Email" />
        <input name = "Password" placeholder="Password" />
        <input name = "PasswordConfirmation" placeholder="Password Confirmation" />
        <button>Sign Up</button>
      </div>
    </form>
    `);
});

app.post("/signup", async (req, res) => {
  const { Email, Password, PasswordConfirmation } = req.body;
  const existingUser = await users.getOneBy({ Email });

  if (existingUser) {
    return res.send("User in use1 ");
  }
  if (Password !== PasswordConfirmation) {
    return res.send("Passwords not match ");
  }
  const user = await users.create({ Email, Password });
  req.session.userId = user.id;
  res.send("done");
});
app.get("/signout", (req, res) => {
  req.session = null;
  res.send("now you are sign out");
});

app.get("/signin", (req, res) => {
  res.send(`
    <form method="POST">
       <div>
        <input name = "Email" placeholder="Email" />
        <input name = "Password" placeholder="Password" />
         <button>Sign in</button>
      </div>
    </form>
    `);
});

app.post("/signin", async (req, res) => {
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

let port = 3000;
app.listen(port, () => {
  console.log(`listening in port ${port}`);
});
