const express = require("express");

const router = express.Router();

router.get("/admin/products", (req, res) => {
  res.send("hi");
});

router.get("/admin/products/new", (req, res) => {
  res.send("hi2");
});

module.exports = router;
