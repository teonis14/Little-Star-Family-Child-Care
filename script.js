/* ---------------------------------------------
   SMOOTH SCROLL FOR NAV MENU
--------------------------------------------- */
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: "smooth" });
    });
});


/* ---------------------------------------------
   "SCHEDULE A TOUR" BUTTON → SCROLL TO CONTACT
--------------------------------------------- */
const tourButton = document.querySelector('.hero button');
if (tourButton) {
    tourButton.addEventListener('click', () => {
        document.querySelector('#contact').scrollIntoView({ behavior: "smooth" });
    });
}


/* ---------------------------------------------
   MOBILE MENU (Hamburger Menu)
   - Requires .menu-btn in your HTML
--------------------------------------------- */
const menuBtn = document.querySelector('.menu-btn');
const navList = document.querySelector('nav ul');

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        navList.classList.toggle('open');
        menuBtn.classList.toggle('open');
    });
}


/* ---------------------------------------------
   FORM VALIDATION (Extra Checks)
--------------------------------------------- */
const form = document.querySelector('.contact-form');

if (form) {
    form.addEventListener('submit', function (e) {
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        let errors = [];

        if (name.length < 2) {
            errors.push("Name must be at least 2 characters.");
        }

        if (!email.includes("@") || !email.includes(".")) {
            errors.push("Please enter a valid email address.");
        }

        if (message.length < 10) {
            errors.push("Message must be at least 10 characters.");
        }

        if (errors.length > 0) {
            e.preventDefault();
            alert("Please fix the following:\n\n" + errors.join("\n"));
        }
    });
}


/* ---------------------------------------------
   IMAGE GALLERY LIGHTBOX
--------------------------------------------- */
document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', () => {
        const overlay = document.createElement('div');
        overlay.classList.add('lightbox');
        overlay.innerHTML = `
            <div class="lightbox-content">
                <img src="${img.src}" alt="">
            </div>
        `;
        document.body.appendChild(overlay);

        overlay.addEventListener('click', () => {
            overlay.remove();
        });
    });
});
