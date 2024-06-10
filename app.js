const express = require("express");
const products = require("./data");
const productsRouter = require("./apis/products/routes");
const connectDB = require("./database");
const app = express();

app.use(express.json());

app.use("/products", productsRouter);
connectDB();
app.listen(8000, () => {
  console.log("i am running on port 8000");
});
