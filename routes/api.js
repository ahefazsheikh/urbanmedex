const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// Get products (optionally filter by category/pageId)
router.get("/products", async (req, res) => {
  try {
    const { pageId } = req.query; 
    let products;

    if (pageId) {
      // filter by category/pageId
      products = await Product.find({ category: pageId });
    } else {
      // return all products if no pageId
      products = await Product.find();
    }

    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
