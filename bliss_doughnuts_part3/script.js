/* Bliss Doughnuts — JavaScript is kept in this separate file for the assignment. */
"use strict";

document.addEventListener("DOMContentLoaded", () => {
  // Responsive navigation
  const menuToggle = document.querySelector(".menu-toggle");
  const siteNav = document.querySelector(".site-nav");
  if (menuToggle && siteNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = siteNav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  // Search, filter and sort products on the menu page
  const searchInput = document.querySelector("#product-search");
  const sortSelect = document.querySelector("#sort-products");
  const productCount = document.querySelector("#product-count");
  const noProducts = document.querySelector("#no-products");
  const productGridContainers = [...document.querySelectorAll(".product-grid")];

  function updateProducts() {
    if (!searchInput || !sortSelect || productGridContainers.length === 0) return;
    const term = searchInput.value.trim().toLowerCase();
    let visibleCount = 0;
    const products = productGridContainers.flatMap(grid => [...grid.querySelectorAll(".product")]);

    products.forEach(product => {
      const matches = product.dataset.name.toLowerCase().includes(term) ||
        product.textContent.toLowerCase().includes(term);
      product.hidden = !matches;
      if (matches) visibleCount++;
    });

    const sortMode = sortSelect.value;
    productGridContainers.forEach(grid => {
      const visible = [...grid.querySelectorAll(".product:not([hidden])")];
      visible.sort((a, b) => {
        if (sortMode === "price-low") return Number(a.dataset.price) - Number(b.dataset.price);
        if (sortMode === "price-high") return Number(b.dataset.price) - Number(a.dataset.price);
        if (sortMode === "name") return a.dataset.name.localeCompare(b.dataset.name);
        return 0;
      });
      visible.forEach(product => grid.appendChild(product));
    });

    if (productCount) productCount.textContent = `${visibleCount} product${visibleCount === 1 ? "" : "s"} found`;
    if (noProducts) noProducts.hidden = visibleCount !== 0;
  }
  if (searchInput && sortSelect) {
    searchInput.addEventListener("input", updateProducts);
    sortSelect.addEventListener("change", updateProducts);
    updateProducts();
  }

  // Accessible image lightbox on About and Menu pages
  const lightbox = document.querySelector("#lightbox");
  if (lightbox) {
    const lightboxImage = lightbox.querySelector("img");
    const caption = lightbox.querySelector("p");
    const closeButton = lightbox.querySelector(".lightbox-close");
    let previousFocus = null;

    function closeLightbox() {
      lightbox.hidden = true;
      lightboxImage.src = "";
      if (previousFocus) previousFocus.focus();
    }

    document.querySelectorAll(".lightbox-image").forEach(image => {
      image.addEventListener("click", () => {
        previousFocus = image;
        lightboxImage.src = image.currentSrc || image.src;
        lightboxImage.alt = image.alt;
        caption.textContent = image.alt;
        lightbox.hidden = false;
        closeButton.focus();
      });
    });
    closeButton.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", event => {
      if (event.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", event => {
      if (event.key === "Escape" && !lightbox.hidden) closeLightbox();
    });
  }

  // Populate order product from a menu link's query string
  const orderProduct = document.querySelector("#order-product");
  if (orderProduct) {
    const requestedProduct = new URLSearchParams(window.location.search).get("product");
    if (requestedProduct) orderProduct.value = requestedProduct;
  }

  // Form helper: browser validation plus clear user-facing messages
  function attachEmailForm(formId, messageId, subject, buildBody) {
    const form = document.getElementById(formId);
    const status = document.getElementById(messageId);
    if (!form || !status) return;

    form.addEventListener("submit", event => {
      event.preventDefault();
      status.textContent = "";
      if (!form.checkValidity()) {
        form.reportValidity();
        status.textContent = "Please check the highlighted fields and correct the errors.";
        return;
      }

      const data = Object.fromEntries(new FormData(form).entries());
      const body = buildBody(data);
      const recipient = "blissdoughnut@gmail.com";
      const mailto = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      status.textContent = "Your email application should open with a draft. Review it and press Send to submit it.";
      window.location.href = mailto;
    });
  }

  attachEmailForm("contact-form", "contact-status", "Bliss Doughnuts — General message", data =>
    `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || "Not provided"}\nMessage type: ${data.type}\n\nMessage:\n${data.message}`
  );

  attachEmailForm("enquiry-form", "enquiry-message", "Bliss Doughnuts — Product/service enquiry", data =>
    `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || "Not provided"}\nEnquiry type: ${data.type}\nPreferred date: ${data.date || "Not specified"}\n\nDetails:\n${data.details}`
  );

  attachEmailForm("order-form", "order-status", "Bliss Doughnuts — Order request", data =>
    `Customer: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nProduct/design: ${data.product}\nNumber of boxes: ${data.quantity}\nDelivery address: ${data.address}\nDelivery area: ${data.area}\nPreferred date: ${data.date}\nPreferred time: ${data.time || "Not specified"}\nPayment preference: ${data.payment}\nSpecial instructions: ${data.message || "None"}\n\nThis is an order request and requires confirmation.`
  );

  // Prevent selection of a delivery date in the past
  const dateInput = document.querySelector("#order-date");
  if (dateInput) {
    const today = new Date();
    const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
      .toISOString().slice(0, 10);
    dateInput.min = localToday;
  }
});
