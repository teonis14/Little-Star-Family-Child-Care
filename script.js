// script.js — functionality for Little Star Daycare

// Smooth scroll for navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Smooth scroll for hero button
document.querySelector('.hero button').addEventListener('click', () => {
  const contact = document.querySelector('#contact');
  contact.scrollIntoView({ behavior: 'smooth' });
});

// Mobile menu toggle
const menuBtn = document.querySelector('.menu-btn');
const navUl = document.querySelector('nav ul');

menuBtn.addEventListener('click', () => {
  navUl.classList.toggle('open');
});

// Contact form validation
const form = document.querySelector('.contact-form');
form.addEventListener('submit', e => {
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all required fields.");
    e.preventDefault();
  } else if (!email.includes("@")) {
    alert("Please enter a valid email.");
    e.preventDefault();
  }
});

// Lightbox gallery
document.querySelectorAll('.gallery img').forEach(img => {
  img.addEventListener('click', () => {
    const lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');

    const imgElement = document.createElement('img');
    imgElement.src = img.src;
    lightbox.appendChild(imgElement);

    lightbox.addEventListener('click', () => {
      document.body.removeChild(lightbox);
    });

    document.body.appendChild(lightbox);
  });
});
