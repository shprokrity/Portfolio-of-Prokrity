// script.js
// Animate skill bars on scroll
const skillBars = document.querySelectorAll('.skill-bar');

function animateSkillBars() {
    skillBars.forEach(bar => {
        const fill = bar.querySelector('.progress-fill');
        const level = bar.getAttribute('data-level');
        fill.style.width = `${level}%`;
    });
}

// Animate orb rings on scroll
const orbRings = document.querySelectorAll('.orb-ring');

function animateOrbRings() {
    orbRings.forEach(ring => {
        ring.style.opacity = '1';
        ring.style.transform = 'translate(-50%, -50%) scale(1)';
    });
}

// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            if (entry.target.id === 'skills') {
                animateSkillBars();
                animateOrbRings();
            }
        }
    });
}, { threshold: 0.1 });

// Observe all cards
document.querySelectorAll('.card').forEach(card => {
    observer.observe(card);
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Update active nav link on scroll
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelector(`.floating-nav a[href="#${sectionId}"]`).classList.add('active');
        } else {
            document.querySelector(`.floating-nav a[href="#${sectionId}"]`).classList.remove('active');
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // Your existing JavaScript code here
    // This ensures it runs AFTER the loading screen
  });