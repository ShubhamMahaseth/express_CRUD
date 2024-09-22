const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productsSchema = new Schema({
  productName: { type: String, required:true },
});

const productModel = mongoose.model("product", productsSchema);

module.exports = productModel;
