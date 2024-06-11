const express = require("express");
const {
  CreateProduct,
  getAllProducts,
  getOneProduct,
  DeleteProduct,
  UpdateProduct,
} = require("./controllers");
const upload = require("../../Middleware/multer");

const productsRouter = express.Router();

productsRouter.get("/", getAllProducts);

productsRouter.get("/:id", getOneProduct);

productsRouter.post("/", upload.single("image"), CreateProduct);

productsRouter.delete("/:id", DeleteProduct);

productsRouter.post("/:id", UpdateProduct);

module.exports = productsRouter;
