const express = require("express");
const router = express.Router();

// Static credentials
const adminUser = "admin";
const adminPass = "urban@medex";

// LOGIN PAGE
router.get("/login", (req, res) => {
  res.render("login", { error: null });
});

// LOGIN AUTH
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === adminUser && password === adminPass) {
    req.session.loggedIn = true;
    res.redirect("/admin_urbanmedex");
  } else {
    res.render("login", { error: "❌ Invalid username or password" });
  }
});




// LOGOUT
router.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/login");
  });
});

module.exports = router;
