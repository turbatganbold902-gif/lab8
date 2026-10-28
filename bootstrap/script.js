
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  themeBtn.textContent =
    document.body.classList.contains("dark-mode")
      ? "Light mode"
      : "Dark mode";
});

function openLightbox(src) {
  document.getElementById("lightboxImage").src = src;
  document.getElementById("lightbox").classList.add("show");
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("show");
}

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeLightbox();
});

document.getElementById("contactForm").addEventListener("submit", event => {
  event.preventDefault();

  const email = document.getElementById("email");
  const message = document.getElementById("formMessage");

  if (!email.checkValidity()) {
    email.reportValidity();
    return;
  }

  message.textContent = "Имэйл хаяг зөв байна!";
  message.className = "mb-3 text-success";
});
