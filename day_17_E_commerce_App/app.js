const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hi there");
});
let port = 3000;
app.listen(port, () => {
  console.log(`listening in port ${port}`);
});
