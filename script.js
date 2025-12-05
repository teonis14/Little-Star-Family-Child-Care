// Modal Elements
const openBtn = document.getElementById("open-tour-btn");
const modal = document.getElementById("tour-modal");
const closeBtn = document.querySelector("#tour-modal .close");
const tourForm = document.getElementById("tour-form");
const tourConfirmation = document.getElementById("tour-confirmation");

// Open modal
openBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  tourForm.style.display = "block";
  tourConfirmation.style.display = "none";
});

// Close when clicking outside content
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    tourForm.style.display = "block";
    tourConfirmation.style.display = "none";
  }
});

// Submit form
tourForm.addEventListener("submit", (e) => {
  e.preventDefault();
  tourForm.style.display = "none";
  tourConfirmation.style.display = "block";
});

// Smooth scroll
document.querySelectorAll("nav ul li a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.getElementById(link.getAttribute("href").slice(1));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

