const express = require("express");
const multer = require("multer");
const newProductTemplate = require("../../views/admin/products/new");
const listOfProductsTemplate = require("../../views/admin/products/index");
const productsRepo = require("../../repositories/products");
const { validationResult } = require("express-validator");

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });
const { requireTitle, requirePrice } = require("./validators");

router.get("/admin/products", async (req, res) => {
  const products = await productsRepo.getAll();
  res.send(listOfProductsTemplate({ products }));
});

router.get("/admin/products/new", (req, res) => {
  res.send(newProductTemplate(req));
});
router.post(
  "/admin/products/new",
  upload.single("image"),
  [requireTitle, requirePrice],
  async (req, res) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
      return res.send(newProductTemplate({ err }));
    }
    const image = req.file.buffer.toString("base64");
    const { title, price } = req.body;
    await productsRepo.create({ title, price, image });

    res.redirect("/admin/products");
  }
);

module.exports = router;
