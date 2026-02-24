document.addEventListener('DOMContentLoaded', () => {

    // Hamburger Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');

            // Animate hamburger lines
            const spans = hamburger.querySelectorAll('span');
            spans.forEach(span => span.classList.toggle('active'));
        });
    }
    // Dynamic Navbar Blur on Scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Smooth Scrolling
    // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    //     anchor.addEventListener('click', function (e) {
    //         e.preventDefault();
    //         const target = document.querySelector(this.getAttribute('href'));
    //         if (target) {
    //             target.scrollIntoView({
    //                 behavior: 'smooth'
    //             });
    //         }
    //     });
    // });


    // Staggered Navbar Entry
    const navItems = document.querySelectorAll('.nav-links li');
    navItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('fade-in');
        }, 100 * (index + 1));
    });

    // Staggered Skills Entry (when About section is visible)
    const skillsSection = document.querySelector('.skills-list');
    if (skillsSection) {
        // We'll let the existing reveal observer handle the section
    }

    // Skills Toggle Logic
    const toggleSkillsBtn = document.getElementById('toggle-skills-btn');
    const hiddenSkills = document.getElementById('more-skills');

    if (toggleSkillsBtn && hiddenSkills) {
        toggleSkillsBtn.addEventListener('click', () => {
            hiddenSkills.classList.toggle('active');

            if (hiddenSkills.classList.contains('active')) {
                toggleSkillsBtn.innerHTML = 'Show Less Skills &uarr;';
            } else {
                toggleSkillsBtn.innerHTML = 'View More Skills &darr;';
            }
        });
    }

    // Update Scroll Animations (Intersection Observer) to include new classes
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, {
        root: null,
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });
    revealElements.forEach(el => revealObserver.observe(el));

    // Twinkling Stars Generation
    function createStars() {
        const starsContainer = document.getElementById('stars-container');
        const starCount = 1000; // Number of stars
        const colors = ['#ffffff', '#6d28d9', '#00e0ff', '#8b5cf6', '#00e0ff']; // Palette colors

        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.classList.add('star');

            // Random positions
            const x = Math.random() * 100;
            const y = Math.random() * 100;

            // Random size (small)
            const size = Math.random() * 2 + 1; // 1px to 3px

            // Random duration and delay
            const duration = Math.random() * 3 + 2; // 2s to 5s
            const delay = Math.random() * 5;

            // Random color
            const color = colors[Math.floor(Math.random() * colors.length)];

            // Random max opacity for depth effect
            const maxOpacity = Math.random() * 0.7 + 0.3;

            // Apply styles
            star.style.left = `${x}%`;
            star.style.top = `${y}%`;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.backgroundColor = color;
            star.style.setProperty('--duration', `${duration}s`);
            star.style.setProperty('--delay', `${delay}s`);
            star.style.setProperty('--max-opacity', maxOpacity);

            starsContainer.appendChild(star);
        }
    }

    createStars();
});