// ===========================
// Schedule a Tour Form
// ===========================
const tourButton = document.querySelector(".hero button");
const tourFormContainer = document.getElementById("tour-form-container");
const tourForm = document.getElementById("tour-form");
const tourConfirmation = document.getElementById("tour-confirmation");

tourButton.addEventListener("click", () => {
  tourFormContainer.style.display = "block";
  tourForm.scrollIntoView({ behavior: "smooth" });
});

tourForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent actual form submission
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

/* You can add this to your CSS for mobile menu:
.show {
  display: flex !important;
  flex-direction: column;
}
*/
