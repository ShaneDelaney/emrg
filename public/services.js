// Services Page JavaScript
console.log('Services.js loaded');

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded in services.js');
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize modal functionality
    initModalFunctionality();
    
    // Smooth scroll for navigation
    initSmoothScroll();
});

// Scroll animations
function initScrollAnimations() {
    try {
        // Add animation classes to elements
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach((card, index) => {
            card.classList.add('fade-in');
            // Stagger the animation delay
            card.style.transitionDelay = `${index * 0.1}s`;
        });
        
        const caseStudies = document.querySelectorAll('.case-study');
        caseStudies.forEach((study) => {
            try {
                // Add different animation classes to different elements
                const header = study.querySelector('.case-study-header');
                if (header) header.classList.add('slide-in-left');
                
                const title = study.querySelector('.case-study-content h3');
                if (title) title.classList.add('slide-in-right');
                
                const image = study.querySelector('.case-study-image');
                if (image) image.classList.add('zoom-in');
                
                const details = study.querySelectorAll('.case-study-details > div');
                details.forEach((detail, index) => {
                    detail.classList.add('fade-in');
                    detail.style.transitionDelay = `${0.2 + (index * 0.1)}s`;
                });
            } catch (e) {
                console.error('Error processing case study:', e);
            }
        });
        
        // Work header animations
        const workHeader = document.querySelector('.work-header h1');
        if (workHeader) workHeader.classList.add('fade-in');
        
        const workIntro = document.querySelector('.work-intro');
        if (workIntro) workIntro.classList.add('fade-in');
        
        const workDisclaimer = document.querySelector('.work-disclaimer');
        if (workDisclaimer) workDisclaimer.classList.add('fade-in');
        
        // Work CTA animations
        const workCta = document.querySelector('.work-cta');
        if (workCta) {
            workCta.classList.add('zoom-in');
        }
        
        // Check which elements are in viewport on load
        checkVisibility();
        
        // Add scroll event listener to check for elements entering viewport
        window.addEventListener('scroll', checkVisibility);
    } catch (e) {
        console.error('Error in initScrollAnimations:', e);
    }
}

// Check if elements are in viewport
function checkVisibility() {
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .zoom-in');
    
    animatedElements.forEach(element => {
        if (isElementInViewport(element)) {
            element.classList.add('visible');
        }
    });
}

// Helper function to check if element is in viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.9 &&
        rect.bottom >= 0
    );
}

// Modal functionality
function initModalFunctionality() {
    const modal = document.getElementById('sample-modal');
    const sampleButtons = document.querySelectorAll('.view-sample');
    const closeModal = document.querySelector('.close-modal');
    const previewContents = document.querySelectorAll('.preview-content');
    
    // Open modal with the correct preview
    sampleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const sampleId = button.getAttribute('data-sample');
            
            // Hide all previews
            previewContents.forEach(preview => {
                preview.style.display = 'none';
            });
            
            // Show the selected preview
            document.getElementById(`${sampleId}-preview`).style.display = 'block';
            
            // Show the modal
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close modal
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Close modal when clicking outside of content
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Add escape key to close modal
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

// Smooth scroll for navigation
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobile-menu');
                const navMenu = document.querySelector('.nav-menu');
                if (navMenu.classList.contains('active')) {
                    mobileMenu.classList.remove('active');
                    navMenu.classList.remove('active');
                }
                
                // Smooth scroll to target
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Adjust for header height
                    behavior: 'smooth'
                });
                
                // Update active nav link
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });
    
    // Mobile menu toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Add parallax effect to case study images
function initParallaxEffect() {
    const caseStudyImages = document.querySelectorAll('.case-study-image');
    
    window.addEventListener('scroll', () => {
        caseStudyImages.forEach(image => {
            const scrollPosition = window.pageYOffset;
            const imagePosition = image.offsetTop;
            const windowHeight = window.innerHeight;
            
            if (scrollPosition + windowHeight > imagePosition && scrollPosition < imagePosition + image.offsetHeight) {
                const parallaxValue = (scrollPosition - imagePosition) * 0.1;
                image.style.transform = `translateY(${parallaxValue}px)`;
            }
        });
    });
}

// Initialize parallax effect
document.addEventListener('DOMContentLoaded', initParallaxEffect); 