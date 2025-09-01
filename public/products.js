// ✅ Use same-origin requests so it works locally & after deployment
const API_BASE_URL = "";  

function normalizePageId(name) {
  return name
    .toLowerCase()
    .replace(/\s+/g, ""); // remove spaces
}

function loadProducts(pageId, containerId = "product-list") {
  fetch(`${API_BASE_URL}/api/products?pageId=${normalizePageId(pageId)}`)
    .then(res => res.json())
    .then(products => {
      const container = document.getElementById(containerId);

      if (!container) {
        console.error(`❌ Container #${containerId} not found`);
        return;
      }

      if (!products.length) {
        container.insertAdjacentHTML("beforeend", "<p>No products found.</p>");
        return;
      }

      const newCards = products.map(p => `
        <div class="col-sm-6 col-md-6 col-lg-4 mb-4">
          <div class="product-item rounded shadow-md p-2 h-100">
            <div class="product__img position-relative text-center">
              <!-- ✅ Use relative link to /product/:id -->
              <a href="/product/${p.id}">
                <img src="${p.image || 'assets/images/placeholder.png'}" 
                     alt="${p.name}" 
                     class="img-fluid rounded w-100" 
                     loading="lazy">
              </a>
              <div class="product__action mt-2">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=worldwideonlinepharmacys@gmail.com&su=Inquiry%20about%20${encodeURIComponent(p.name)}&body=Hello,%20I%20would%20like%20to%20know%20more%20about%20${encodeURIComponent(p.name)}."
                   class="btn btn-primary btn__rounded"
                   target="_blank">
                  <i class="icon-mail"></i> <span>Inquire Now</span>
                </a>
              </div>
            </div>
            <div class="product__info text-center mt-3">
              <h4 class="product__title">
                <!-- ✅ Use relative link here as well -->
                <a href="/product/${p.id}" class="text-dark">
                  ${p.name}
                </a>
              </h4>
              ${p.price ? `<span class="product__price text-muted">₹${p.price}</span>` : ""}
            </div>
          </div>
        </div>
      `).join("");

      container.insertAdjacentHTML("beforeend", newCards);
    })
    .catch(err => {
      console.error("❌ Error loading products:", err);
    });
}
