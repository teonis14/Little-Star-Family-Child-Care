document.addEventListener('DOMContentLoaded', function() {

    // ===========================
    // 1. Schedule a Tour Modal Logic
    // ===========================

    const openBtn = document.getElementById("open-tour-btn");
    const modal = document.getElementById("tour-modal");
    const closeBtn = document.querySelector("#tour-modal-content .close"); 
    const tourForm = document.getElementById("tour-form");
    const tourConfirmation = document.getElementById("tour-confirmation");

    // Function to reset and close the modal
    function closeModalAndReset() {
        if (modal) modal.style.display = "none";
        // Reset state
        if (tourForm) tourForm.style.display = "block";
        if (tourConfirmation) tourConfirmation.style.display = "none";
        // Reset form fields
        if (tourForm) tourForm.reset(); 
    }

    // Open modal
    if (openBtn && modal) {
        openBtn.addEventListener("click", () => {
            modal.style.display = "flex";
        });
    }

    // Close modal when clicking the close button
    if (closeBtn) {
        closeBtn.addEventListener("click", closeModalAndReset);
    }

    // Close modal when clicking outside the modal content
    if (modal) {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                closeModalAndReset();
            }
        });
    }

    // Handle form submission
    if (tourForm && tourConfirmation) {
        tourForm.addEventListener("submit", (e) => {
            e.preventDefault(); 
            tourForm.style.display = "none";
            tourConfirmation.style.display = "block";

            // Optional: Close modal automatically after 3 seconds
            setTimeout(closeModalAndReset, 3000); 
        });
    }


    // ===========================
    // 2. Mobile Menu Toggle 
    // ===========================
    const menuBtn = document.querySelector(".menu-btn");
    const navUl = document.querySelector("nav ul");

    if (menuBtn && navUl) {
        menuBtn.addEventListener("click", () => {
            navUl.classList.toggle("open");
        });
    }


    // ===========================
    // 3. Smooth Scroll for Nav Links
    // ===========================
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", e => {
            const href = link.getAttribute("href");
            if (href.startsWith("#")) {
                e.preventDefault();
                const target = document.getElementById(href.slice(1));
                if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                    // Close mobile menu after clicking a link
                    if (navUl && navUl.classList.contains("open")) {
                        navUl.classList.remove("open");
                    }
                }
            }
        });
    });


    // ===========================
    // 4. Image Gallery Lightbox 🖼️
    // ===========================
    const galleryImgs = document.querySelectorAll(".gallery img");

    if (galleryImgs.length > 0) {
        // Create the lightbox structure once
        const lightbox = document.createElement('div');
        lightbox.classList.add('lightbox');
        lightbox.style.display = 'none'; // Initially hidden
        document.body.appendChild(lightbox);

        galleryImgs.forEach(img => {
            img.addEventListener('click', () => {
                // Get the path for the large image from the data attribute
                const largeSrc = img.getAttribute('data-large-src');
                const finalSrc = largeSrc || img.src; // Fallback to thumbnail src if large isn't defined

                // Clear previous content
                lightbox.innerHTML = ''; 

                // Create and append the large image element
                const clonedImg = document.createElement('img');
                clonedImg.src = finalSrc; 
                clonedImg.alt = img.alt;
                
                lightbox.appendChild(clonedImg);
                lightbox.style.display = 'flex';
            });
        });

        // Close lightbox when clicking anywhere on the overlay OR the image itself
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox || e.target.tagName === 'IMG') {
                lightbox.style.display = 'none';
            }
        });
        
        // Close lightbox on ESC key press
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightbox.style.display === 'flex') {
                lightbox.style.display = 'none';
            }
        });
    }

}); // End of DOMContentLoaded
