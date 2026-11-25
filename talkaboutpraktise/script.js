// Automatically display the current year
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Display a message in the browser console
console.log("P.M.M Holdings website loaded successfully!");
// WHOLESALE QUOTATION FORM

const quotationForm = document.getElementById("quotationForm");

if (quotationForm) {

    quotationForm.addEventListener("submit", function(event) {

        event.preventDefault();

        // Get customer information
        const name = document.getElementById("customerName").value.trim();

        const phone = document.getElementById("customerPhone").value.trim();

        const product = document.getElementById("product").value;

        const quantity = document.getElementById("quantity").value;

        const message = document.getElementById("message").value.trim();

        // Prepare WhatsApp message
        const whatsappMessage =
            `Hello P.M.M Holdings!

I would like a wholesale quotation.

Name: ${name}

Phone: ${phone}

Product: ${product}

Quantity: ${quantity}

Additional Requirements: ${message}

Please send me your wholesale price.

Thank you.`;

        // Open WhatsApp
        const whatsappURL =
            "https://wa.me/254795994560?text=" +
            encodeURIComponent(whatsappMessage);

        window.open(whatsappURL, "_blank");

    });

}
// ===================================
// MOBILE NAVIGATION FUNCTIONALITY
// ===================================

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.getElementById("navLinks");

// Open and close menu
if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function() {

        const isOpen = navLinks.classList.toggle("active");

        menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

    });

    // Close menu after clicking a navigation link
    navLinks.querySelectorAll("a").forEach(function(link) {

        link.addEventListener("click", function() {

            navLinks.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        });

    });

    // Close menu when clicking outside it
    document.addEventListener("click", function(event) {

        if (
            !menuToggle.contains(event.target) &&
            !navLinks.contains(event.target)
        ) {

            navLinks.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        }

    });

}