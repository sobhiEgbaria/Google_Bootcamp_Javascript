const express = require("express");
const listOfProductsTemplate = require("../../views/users/index");
const productsRepo = require("../../repositories/products");

const router = express.Router();

router.get("/", async (req, res) => {
  const products = await productsRepo.getAll();
  res.send(listOfProductsTemplate({ products }));
});

module.exports = router;
