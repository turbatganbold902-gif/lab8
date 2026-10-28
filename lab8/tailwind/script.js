const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("bg-slate-100");
  document.body.classList.toggle("text-slate-800");
  document.body.classList.toggle("bg-slate-950");
  document.body.classList.toggle("text-white");

  document.querySelectorAll("article, #contactForm")
    .forEach(element => {
      element.classList.toggle("bg-white");
      element.classList.toggle("bg-slate-800");
    });

  themeBtn.textContent =
    document.body.classList.contains("dark")
      ? "Light mode"
      : "Dark mode";
});

function openLightbox(src) {
  document.getElementById("lightboxImage").src = src;
  document.getElementById("lightbox").classList.remove("hidden");
  document.getElementById("lightbox").classList.add("flex");
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.classList.add("hidden");
  lightbox.classList.remove("flex");
}

document.getElementById("contactForm").addEventListener("submit", event => {
  event.preventDefault();

  const email = document.getElementById("email");
  const message = document.getElementById("formMessage");

  if (email.checkValidity()) {
    message.textContent = "Имэйл амжилттай шалгагдлаа!";
    message.className = "mt-3 text-green-600";
  } else {
    email.reportValidity();
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeLightbox();
});