const express = require("express");
const {
  CreateProduct,
  getAllProducts,
  getOneProduct,
  DeleteProduct,
} = require("./controllers");

const productsRouter = express.Router();

productsRouter.get("/", getAllProducts);

productsRouter.get("/:id", getOneProduct);

productsRouter.post("/", CreateProduct);

productsRouter.delete("/:id", DeleteProduct);

module.exports = productsRouter;
