const express = require("express");
const products = require("./data");
const productsRouter = require("./apis/products/routes");
const connectDB = require("./database");
const morgn = require("morgan");
const app = express();
const cors = require("cors");
const ErrorHandler = require("./Middleware/ErrorHandler");
const NotFound = require("./Middleware/NotFound");
const path = require("path");

app.use(express.json());
app.use(morgn("dev"));
app.use(cors());

app.use("/media", express.static(path.join(__dirname, "media")));

app.use("/products", productsRouter);
app.use(ErrorHandler);
app.use(NotFound);
connectDB();
app.listen(8000, () => {
  console.log("i am running on port 8000");
});
