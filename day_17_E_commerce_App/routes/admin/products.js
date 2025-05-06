const express = require("express");
const multer = require("multer");
const { requireAuth } = require("../../routes/admin/middleware");
const newProductTemplate = require("../../views/admin/products/new");
const listOfProductsTemplate = require("../../views/admin/products/index");
const productsEditTemplate = require("../../views/admin/products/edit");
const productsRepo = require("../../repositories/products");
const { validationResult } = require("express-validator");

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });
const { requireTitle, requirePrice } = require("./validators");
const products = require("../../repositories/products");

router.get("/admin/products", requireAuth, async (req, res) => {
  const products = await productsRepo.getAll();
  res.send(listOfProductsTemplate({ products }));
});

router.get("/admin/products/new", requireAuth, (req, res) => {
  res.send(newProductTemplate(req));
});
router.post(
  "/admin/products/new",
  requireAuth,
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
router.get("/admin/products/:id/edit", requireAuth, async (req, res) => {
  const product = await productsRepo.getOne(req.params.id);

  if (!product) {
    return res.send("Product not found");
  }

  res.send(productsEditTemplate({ product }));
});
router.post(
  "/admin/products/:id/edit",
  requireAuth,
  upload.single("image"),
  [requireTitle, requirePrice],
  async (req, res) => {
    const product = await productsRepo.getOne(req.params.id);
    const changes = req.body;
    const err = validationResult(req);
    if (!err.isEmpty()) {
      return res.send(productsEditTemplate({ product, err }));
    }
    if (req.file) {
      changes.image = req.file.buffer.toString("base64");
    }

    try {
      await productsRepo.update(req.params.id, changes);
    } catch (err) {
      return res.send("Could not find item");
    }

    res.redirect("/admin/products");
  }
);

router.post("/admin/products/:id/delete", requireAuth, async (req, res) => {
  await productsRepo.deleteOne(req.params.id);

  res.redirect("/admin/products");
});

module.exports = router;
