const products = require("../../data");

const getAllProducts = (req, res) => {
  return res.json(products);
};

const getOneProduct = (req, res) => {
  const id = req.params.id;

  const product = products.find((product) => {
    return product.id == id;
  });
  if (product) return res.json(product);
  else {
    return res.json("There is no product with this id!");
  }
};

const CreateProduct = (req, res) => {
  products.push(req.body);
  return rec.json(products);
};
const DeleteProduct = (req, res) => {
  const id = req.params.id;
  const productDel = products.filter((product) => {
    if (id == product.id) return false;
    else {
      return true;
    }
  });

  return res.json(productDel);
};
module.exports = {
  getAllProducts,
  getOneProduct,
  CreateProduct,
  DeleteProduct,
};
