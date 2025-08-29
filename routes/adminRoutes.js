const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// Dashboard
// ADMIN PANEL (Protected)
router.get("/admin_urbanmedex", (req, res) => {
  if (req.session && req.session.loggedIn) {   // 
    res.render("dashboard");
  } else {
    res.redirect("/login");
  }
});

// Products CRUD
router.get("/products", productController.listProducts);
router.post("/products/add",productController.upload, productController.addProduct);
router.post("/products/update/:id", productController.upload, productController.updateProduct);
router.get("/products/delete/:id", productController.deleteProduct);





module.exports = router;
