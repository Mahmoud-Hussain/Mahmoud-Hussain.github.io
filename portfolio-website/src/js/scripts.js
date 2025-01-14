// This file contains JavaScript code for the portfolio webpage.
// Add functionality for interactive elements, such as navigation, animations, or form handling.

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Form submission handling
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Handle form submission logic here
            alert('Form submitted!');
        });
    }

    // Animation for sections when they come into view
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Parallax effect for header
    globalThis.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        header.style.backgroundPositionY = `${globalThis.scrollY * 0.5}px`;
    });
});