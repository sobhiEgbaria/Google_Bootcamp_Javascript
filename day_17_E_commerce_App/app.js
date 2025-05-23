const express = require("express");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const authRouter = require("./routes/admin/auth");
const adminProductsRouter = require("./routes/admin/products");
const userProductsRouter = require("./routes/users/products");
const cartsRouter = require("./routes/users/cart");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["sobhisobhisobhi"] }));

app.use(authRouter);
app.use(adminProductsRouter);
app.use(userProductsRouter);
app.use(cartsRouter);

app.listen(3000, () => {
  console.log(`listening in port ${3000}`);
});
