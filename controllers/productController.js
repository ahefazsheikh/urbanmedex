const multer = require("multer");
const { supabase } = require("../connection");

// ✅ Multer → keep in memory (so we can send buffer to Supabase)
const storage = multer.memoryStorage();
const upload = multer({ storage });

/**
 * Utility function to normalize category → pageId
 * Converts: "Antiviral And Antibiotics" → "antiviralandantibiotics"
 */
function normalizePageId(category) {
  return category
    .toLowerCase()
    .replace(/\s+/g, ""); // remove spaces
}

// ✅ List Products
exports.listProducts = async (req, res) => {
  try {
    const { data: products, error } = await supabase
      .from("products")
      .select("*")
      .order("created_at", { ascending: false }); // show newest first

    if (error) throw error;

    res.render("products", { products, categories: [] });
  } catch (err) {
    console.error("❌ Error fetching products:", err);
    res.status(500).send("Error fetching products");
  }
};

// ✅ Add Product
exports.addProduct = async (req, res) => {
  try {
    const { name, category, details, description } = req.body;
    const pageId = normalizePageId(category);

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

    if (insertError) throw insertError;

    // ✅ Redirect back to admin dashboard
    res.redirect("/admin_urbanmedex");
  } catch (err) {
    console.error("❌ Insert error:", err);
    res.status(500).send("Error adding product");
  }
};



// ✅ Update Product
exports.updateProduct = async (req, res) => {
  try {
    const { name, category, details, description } = req.body;
    let updateData = {
      name,
      category,
      pageId: normalizePageId(category),
      details,
      description,
    };

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

    if (updateError) throw updateError;

    // ✅ Redirect back to admin dashboard
    res.redirect("/admin_urbanmedex");
  } catch (err) {
    console.error("❌ Update error:", err);
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

    if (deleteError) throw deleteError;

    // ✅ Redirect back to admin dashboard
    res.redirect("/admin_urbanmedex");
  } catch (err) {
    console.error("❌ Delete error:", err);
    res.status(500).send("Error deleting product");
  }
};

// ✅ Export multer middleware
exports.upload = upload.single("image");
