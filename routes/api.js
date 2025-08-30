const express = require("express");
const router = express.Router();
const { supabase } = require("../connection");

// Get products (optionally filter by category/pageId)
router.get("/products", async (req, res) => {
  try {
    const { pageId } = req.query;
    let query = supabase.from("products").select("*");

    if (pageId) {
      // filter by category/pageId
      query = query.eq("pageId", pageId); 
    }

    const { data: products, error } = await query;

    if (error) {
      console.error("❌ Supabase error:", error);
      return res.status(500).json({ error: "Database error" });
    }

    res.json(products || []);
  } catch (err) {
    console.error("❌ Route error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
