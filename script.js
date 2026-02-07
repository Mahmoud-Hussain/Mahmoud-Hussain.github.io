// Typing Effect
const typingText = document.querySelector('.typing-text');
const words = ["CSE Student", "Web Developer", "Programmer", "Tech Enthusist"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    if (!typingText) return; // Exit if element doesn't exist

    const currentWord = words[wordIndex];
    const currentChars = currentWord.substring(0, charIndex);

    typingText.textContent = currentChars;
    typingText.classList.add('typing-cursor');

    let typeSpeed = isDeleting ? 100 : 200;

    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
    } else {
        isDeleting = !isDeleting;
        typeSpeed = isDeleting ? 1000 : 500; // Pause before deleting/typing next word

        if (!isDeleting) {
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    setTimeout(typeEffect, typeSpeed);
}

// Start typing effect on load
document.addEventListener('DOMContentLoaded', typeEffect);

// Smooth Scroll for Nav Links (Optional if scroll-behavior: smooth isn't enough for some browsers)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar Background Change on Scroll
const nav = document.querySelector('.glass-nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Simple Tilt Effect for Cards
const cards = document.querySelectorAll('.glass-card');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Calculate rotation based on mouse position
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -5; // max -5deg to 5deg
        const rotateY = ((x - centerX) / centerX) * 5;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
});

// Theme Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

// Check Local Storage
// Default to Light Mode unless Dark Mode is explicitly set
if (localStorage.getItem('theme') !== 'dark') {
    body.classList.add('light-mode');
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
    localStorage.setItem('theme', 'light');
} else {
    // Ensure icon is correct for Dark Mode
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');

    if (body.classList.contains('light-mode')) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    }
});

// GitHub Calendar Initialization
// Using a try-catch to avoid errors on pages without the calendar (like graphics.html)
try {
    GitHubCalendar(".calendar", "Mahmoud-Hussain", {
        responsive: true,
        tooltips: true
    });
} catch (e) {
    console.log("GitHub Calendar not present on this page.");
}
