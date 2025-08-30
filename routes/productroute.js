const express = require("express");
const router = express.Router();
const { supabase } = require("../connection");

// ✅ API: Get all products (for frontend)
router.get("/api/products", async (req, res) => {
  try {
    const { pageId } = req.query;
    let query = supabase.from("products").select("*");

    if (pageId) {
      query = query.eq("pageId", pageId);
    }

    const { data, error } = await query.order("created_at", { ascending: false });

    if (error) {
      console.error("❌ Supabase error:", error);
      return res.status(500).json({ error: error.message });
    }

    res.json(data);
  } catch (err) {
    console.error("❌ API Route error:", err);
    res.status(500).json({ error: "Server Error" });
  }
});

// ✅ API: Get single product (for frontend detail page)
router.get("/api/products/:id", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("id", req.params.id)
      .single();

    if (error) {
      console.error("❌ Supabase error:", error);
      return res.status(500).json({ error: error.message });
    }

    if (!data) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json(data);
  } catch (err) {
    console.error("❌ API Route error:", err);
    res.status(500).json({ error: "Server Error" });
  }
});

// ✅ Existing route (admin panel EJS render)
router.get("/:id", async (req, res) => {
  try {
    const { data: product, error } = await supabase
      .from("products")
      .select("*")
      .eq("id", req.params.id)
      .single();

    if (error) {
      console.error("❌ Supabase error:", error);
      return res.status(500).send("Server Error");
    }

    if (!product) {
      return res.status(404).send("Product not found");
    }

    res.render("productdetails", { product });
  } catch (err) {
    console.error("❌ Route error:", err);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
