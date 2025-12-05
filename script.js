// ===========================
// Schedule a Tour Modal
// ===========================
const openBtn = document.getElementById("open-tour-btn");
const modal = document.getElementById("tour-modal");
const closeBtn = document.querySelector("#tour-modal .close");
const tourForm = document.getElementById("tour-form");
const tourConfirmation = document.getElementById("tour-confirmation");

// Open the modal
openBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

// Close modal when clicking the close button
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  tourForm.style.display = "block";
  tourConfirmation.style.display = "none";
});

// Close modal when clicking outside the modal content
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    tourForm.style.display = "block";
    tourConfirmation.style.display = "none";
  }
});

// Handle form submission
tourForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent page reload
  tourForm.style.display = "none";
  tourConfirmation.style.display = "block";
});

// ===========================
// Smooth Scroll for Nav Links
// ===========================
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").slice(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});

// ===========================
// Mobile Menu Toggle (Optional)
// ===========================
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav ul");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("show");
});

/* 
To make the mobile menu show, add this to your CSS:

.show {
  display: flex !important;
  flex-direction: column;
}
*/
