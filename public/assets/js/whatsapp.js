document.addEventListener("DOMContentLoaded", () => {

  fetch("/partials/whatsapp-button.html")
    .then(res => res.text())
    .then(data => {
      document.body.insertAdjacentHTML("beforeend", data);
      initWAButton();   // run AFTER HTML injection
    });

  function initWAButton() {
    const waBtn = document.querySelector(".wa-floating");
    const scrollBtn = document.getElementById("scrollTopBtn");

    function adjustWAButton() {
      if (!scrollBtn || !waBtn) return;

      const isVisible = scrollBtn.classList.contains("actived");

      if (window.innerWidth <= 767) {
        waBtn.style.bottom = isVisible ? "70px" : "20px";
      } else {
        waBtn.style.bottom = isVisible ? "90px" : "30px";
      }
    }

    window.addEventListener("scroll", adjustWAButton);
    window.addEventListener("resize", adjustWAButton);
    adjustWAButton();
  }

});
