const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: String,
  image: String,
  description: String,
  color: String,
  quantity: Number,
  price: { type: Number, default: 100 },
});

module.exports = mongoose.model("product", productSchema);
