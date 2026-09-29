// ==============================
// MOBILE MENU
// ==============================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("active");

    });

});


// ==============================
// CONTACT FORM
// ==============================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    alert(
        "Thank you, " + name +
        "! Your message has been received."
    );

    contactForm.reset();

});


// ==============================
// CURRENT YEAR
// ==============================

document.getElementById("year").textContent =
    new Date().getFullYear();


// ==============================
// SCROLL ANIMATION
// ==============================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(

    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },

    {
        threshold: 0.1
    }

);


sections.forEach(function(section) {

    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "opacity 0.8s ease, transform 0.8s ease";

    observer.observe(section);

});