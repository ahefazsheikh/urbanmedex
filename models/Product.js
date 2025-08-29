const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  pageId:String,
  details: String,
  image: String,
  description: String
});

module.exports = mongoose.model("Product", productSchema);
