const multer = require("multer");
const categoryMap = require("../utils/categoryMap");
const { supabase } = require("../connection");

// multer → keep in memory (so we can send buffer to Supabase)
const storage = multer.memoryStorage();
const upload = multer({ storage });

// ✅ List Products
exports.listProducts = async (req, res) => {
  const { data: products, error } = await supabase.from("products").select("*");

  if (error) {
    console.error("❌ Error fetching products:", error);
    return res.status(500).send("Error fetching products");
  }

  res.render("products", { products, categories: [] });
};

// ✅ Add Product
exports.addProduct = async (req, res) => {
  try {
    const { name, category, details, description } = req.body;
    const pageId = categoryMap[category] || "others";

    let imageUrl = null;

    if (req.file) {
      const filePath = `images/${Date.now()}-${req.file.originalname}`;

      const { error: uploadError } = await supabase.storage
        .from("products")
        .upload(filePath, req.file.buffer, {
          contentType: req.file.mimetype,
        });

      if (uploadError) {
        console.error("❌ Upload error:", uploadError);
        return res.status(500).send("Image upload failed");
      }

      const { data: publicUrlData } = supabase.storage
        .from("products")
        .getPublicUrl(filePath);

      imageUrl = publicUrlData.publicUrl;
    }

    const { error: insertError } = await supabase.from("products").insert([
      { name, category, pageId, details, description, image: imageUrl },
    ]);

    if (insertError) {
      console.error("❌ Insert error:", insertError);
      return res.status(500).send("Error adding product");
    }

    res.redirect("/products");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding product");
  }
};

// ✅ Update Product
exports.updateProduct = async (req, res) => {
  try {
    const { name, category, details, description } = req.body;
    let updateData = { name, category, details, description };

    if (req.file) {
      const filePath = `images/${Date.now()}-${req.file.originalname}`;

      const { error: uploadError } = await supabase.storage
        .from("products")
        .upload(filePath, req.file.buffer, {
          contentType: req.file.mimetype,
          upsert: true,
        });

      if (uploadError) {
        console.error("❌ Upload error:", uploadError);
        return res.status(500).send("Image upload failed");
      }

      const { data: publicUrlData } = supabase.storage
        .from("products")
        .getPublicUrl(filePath);

      updateData.image = publicUrlData.publicUrl;
    }

    const { error: updateError } = await supabase
      .from("products")
      .update(updateData)
      .eq("id", req.params.id);

    if (updateError) {
      console.error("❌ Update error:", updateError);
      return res.status(500).send("Error updating product");
    }

    res.redirect("/products");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error updating product");
  }
};

// ✅ Delete Product
exports.deleteProduct = async (req, res) => {
  try {
    const { error: deleteError } = await supabase
      .from("products")
      .delete()
      .eq("id", req.params.id);

    if (deleteError) {
      console.error("❌ Delete error:", deleteError);
      return res.status(500).send("Error deleting product");
    }

    res.redirect("/products");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting product");
  }
};

// ✅ Export multer middleware
exports.upload = upload.single("image");
