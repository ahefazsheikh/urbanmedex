const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const { supabase } = require("../connection");

// ✅ Middleware: check login session
function isAuthenticated(req, res, next) {
  if (req.session && req.session.loggedIn) {
    next();
  } else {
    res.redirect("/login");
  }
}

// ✅ Admin panel (list products)
router.get("/admin_urbanmedex", isAuthenticated, productController.listProducts);

// ✅ Add product
router.post("/products/add", isAuthenticated, productController.upload, productController.addProduct);

// ✅ Delete product
router.get("/products/delete/:id", isAuthenticated, productController.deleteProduct);

// ✅ Search products (by name)
router.get("/search", isAuthenticated, async (req, res) => {
  try {
    const { q } = req.query;

    if (!q) {
      // ✅ Fetch all products if query is empty
      const { data: products, error } = await supabase
        .from("products")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;

      return res.render("products", { products, categories: [] });
    }

    // ✅ Search products
    const { data: products, error } = await supabase
      .from("products")
      .select("*")
      .ilike("name", `%${q.trim()}%`)
      .order("created_at", { ascending: false });

    if (error) throw error;

    console.log("✅ Products found:", products.length);

    // Render same products page with filtered results
    res.render("products", { products, categories: [] });
  } catch (err) {
    console.error("❌ Search error:", err.message);
    res.status(500).send("Error searching products");
  }
});

// ✅ API for live search suggestions
router.get("/api/search", isAuthenticated, async (req, res) => {
  try {
    const { q } = req.query;
    if (!q) return res.json([]); // return empty if nothing typed

    const { data, error } = await supabase
      .from("products")
      .select("id, name")
      .ilike("name", `%${q.trim()}%`)
      .limit(5); // limit suggestions

    if (error) throw error;

    res.json(data);
  } catch (err) {
    console.error("❌ Live search error:", err.message);
    res.status(500).json({ error: "Error fetching suggestions" });
  }
});

module.exports = router;
