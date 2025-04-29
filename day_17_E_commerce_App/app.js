const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send(`
    <form method="POST">
      <div>
        <input name = "Email" placeholder="Email" />
        <input name = "Password" placeholder="Password" />
        <input name = "PasswordConfirmation" placeholder="Password Confirmation" />
        <button>Sign In</button>
      </div>
    </form>
    `);
});

app.post("/", (req, res) => {
  res.send(req.body);
});
let port = 3000;
app.listen(port, () => {
  console.log(`listening in port ${port}`);
});
