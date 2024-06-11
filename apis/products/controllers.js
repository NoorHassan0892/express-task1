const { request } = require("express");
const Product = require("../../models/Products");

const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    return res.json(products);
  } catch (error) {
    return next(error);
  }
};

const getOneProduct = async (req, res, next) => {
  const id = req.params.id;

  try {
    const product = await Product.findById(id);
    if (product) {
      return res.status(200).json(product);
    } else {
      return res
        .status(404)
        .json({ msg: "There is no product with this id, is not found!" });
    }
  } catch (error) {
    return next(error);
  }
};

const CreateProduct = async (req, res, next) => {
  try {
    console.log(req.body);
    if (req.file) {
      req.body.image = req.file.path;
    }
    console.log(req.body);
    const newProduct = await Product.create(req.body);
    if (newProduct) {
      return res.status(201).json(newProduct);
    } else {
      return rec.status(404).json({ msg: "Create a Proudect is faild! " });
    }
  } catch (error) {
    return next(error);
  }
};

const DeleteProduct = async (req, res, next) => {
  const id = req.params.id;
  try {
    const productDel = await Product.findByIdAndDelete(id, req.body);
    if (product.id) {
      return res.status(201).json(productDel);
    } else {
      return res.status(404).json({ msg: "Delete the Proudect is Faild!" });
    }
  } catch (error) {
    return next(error);
    // return res.status(error.status).json(error);
  }
};

const UpdateProduct = async (req, res, next) => {
  const id = req.params.id;
  try {
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (product) {
      return res.status(200).json(product);
    } else return res.status(404).json({ msg: "Update Product is Faild!" });
  } catch (error) {
    return next(error);
    // return res.status(error.status).json(error);
  }
};

module.exports = {
  getAllProducts,
  getOneProduct,
  CreateProduct,
  DeleteProduct,
  UpdateProduct,
};
