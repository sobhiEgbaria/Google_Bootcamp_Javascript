const express = require("express");
const bodyParser = require("body-parser");
const users = require("./repositories/users.js");
const cookieSession = require("cookie-session");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["sobhisobhisobhi"] }));
app.get("/", (req, res) => {
  res.send(`
    <form method="POST">
    ${req.session.userId}
      <div>
        <input name = "Email" placeholder="Email" />
        <input name = "Password" placeholder="Password" />
        <input name = "PasswordConfirmation" placeholder="Password Confirmation" />
        <button>Sign In</button>
      </div>
    </form>
    `);
});

app.post("/", async (req, res) => {
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

let port = 3000;
app.listen(port, () => {
  console.log(`listening in port ${port}`);
});
