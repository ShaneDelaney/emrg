// Debug version of services.js
console.log('Services debug script loaded');

// Basic functionality only
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded in services-debug.js');
    
    // Mobile menu toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenu && navMenu) {
        console.log('Mobile menu elements found');
        mobileMenu.addEventListener('click', function() {
            console.log('Mobile menu clicked');
            mobileMenu.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    } else {
        console.error('Mobile menu elements not found');
    }
    
    // Add simple animations
    const serviceCards = document.querySelectorAll('.service-card');
    console.log(`Found ${serviceCards.length} service cards`);
    
    serviceCards.forEach((card, index) => {
        // Simple fade in
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        // Stagger the animation
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 * index);
    });
}); 