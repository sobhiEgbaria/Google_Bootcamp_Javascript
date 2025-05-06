const express = require("express");
const { requireAuth } = require("../../routes/admin/middleware");
const listOfProductsTemplate = require("../../views/users/index");
const productsRepo = require("../../repositories/products");

const router = express.Router();
const products = require("../../repositories/products");

router.get("/", async (req, res) => {
  const products = await productsRepo.getAll();
  res.send(listOfProductsTemplate({ products }));
});

module.exports = router;
