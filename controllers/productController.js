const express = require("express");
const app = express();
const Product = require("../models/Product");
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");
const categoryMap = require ('../utils/categoryMap')


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads/"); 
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); 
  },
});

const upload = multer({ storage: storage });



// List Products
exports.listProducts = async (req, res) => {
  const products = await Product.find();
  res.render("products", { products, categories: [] }); 
};

// Add Product
exports.addProduct = async (req, res) => {
  try {
    const { name, category, details, description } = req.body;

    const pageId = categoryMap[category] || "others";

    const product = new Product({
      name,
      category,
      pageId,
      details,
      description,
      image: req.file ? `/uploads/${req.file.filename}` : null,
    });

    await product.save();
    res.redirect("/products");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding product");
  }
};





// Update Product
exports.updateProduct = async (req, res) => {
  try {
    const { name, category, details, description } = req.body;

    const updateData = { name, category, details, description };

    if (req.file) {
      updateData.image = `/uploads/${req.file.filename}`;
    }

    await Product.findByIdAndUpdate(req.params.id, updateData);
    res.redirect("/products");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error updating product");
  }
};

// Delete Product
exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.redirect("/products");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting product");
  }
};


exports.upload = upload.single("image");
