const express = require("express");
const newProductTemplate = require("../../views/admin/products/new");
const { validationResult } = require("express-validator");

const router = express.Router();
const { requireTitle, requirePrice } = require("./validators");

router.get("/admin/products", (req, res) => {
  res.send(newProductTemplate(req));
});

router.get("/admin/products/new", (req, res) => {
  res.send(newProductTemplate(req));
});
router.post("/admin/products/new", [requireTitle, requirePrice], (req, res) => {
  const err = validationResult(req);
  if (!err.isEmpty()) console.log(err);
  res.send("done");
});

module.exports = router;
