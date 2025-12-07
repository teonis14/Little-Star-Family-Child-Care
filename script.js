document.addEventListener('DOMContentLoaded', function() {

    // ===========================
    // Schedule a Tour Modal Logic
    // ===========================

    // Modal Elements
    const openBtn = document.getElementById("open-tour-btn");
    const modal = document.getElementById("tour-modal");
    // Use querySelector for elements that might not be at the root
    const closeBtn = document.querySelector("#tour-modal-content .close"); 
    const tourForm = document.getElementById("tour-form");
    const tourConfirmation = document.getElementById("tour-confirmation");

    // Open modal
    if (openBtn && modal) {
        openBtn.addEventListener("click", () => {
            modal.style.display = "flex";
        });
    }

    // Function to reset and close the modal
    function closeModalAndReset() {
        modal.style.display = "none";
        // Reset state
        tourForm.style.display = "block";
        tourConfirmation.style.display = "none";
        // Reset form fields
        tourForm.reset(); 
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
            e.preventDefault(); // Prevent page reload
            tourForm.style.display = "none";
            tourConfirmation.style.display = "block";

            // Optional: Close modal automatically after 3 seconds
            setTimeout(closeModalAndReset, 3000); 
        });
    }


    // ===========================
    // Mobile Menu Toggle (CORRECTED to use .open class)
    // ===========================
    const menuBtn = document.querySelector(".menu-btn");
    const navUl = document.querySelector("nav ul"); // Target the ul element for class toggle

    if (menuBtn && navUl) {
        menuBtn.addEventListener("click", () => {
            // Toggles the 'open' class used by your CSS media query
            navUl.classList.toggle("open");
        });
    }


    // ===========================
    // Smooth Scroll for Nav Links
    // ===========================
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", e => {
            // Check if the link has a hash and is not a lightbox trigger (if one were used)
            const href = link.getAttribute("href");
            if (href.startsWith("#")) {
                e.preventDefault();
                const target = document.getElementById(href.slice(1));
                if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                    // Optional: Close mobile menu after clicking a link
                    if (navUl.classList.contains("open")) {
                         navUl.classList.remove("open");
                    }
                }
            }
        });
    });


    // ===========================
    // Image Gallery Lightbox (REQUIRED for the .lightbox CSS)
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
                // Remove previous content
                lightbox.innerHTML = ''; 

                // Create a clone of the clicked image
                const clonedImg = document.createElement('img');
                clonedImg.src = img.src;
                clonedImg.alt = img.alt;
                
                lightbox.appendChild(clonedImg);
                lightbox.style.display = 'flex';
            });
        });

        // Close lightbox when clicking anywhere on the overlay
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox || e.target.tagName === 'IMG') {
                lightbox.style.display = 'none';
            }
        });
    }

}); // End of DOMContentLoaded
