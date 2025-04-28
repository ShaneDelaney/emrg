// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

// Fix for mobile viewport height issues (iOS Safari)
function setViewportHeight() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// Set the height on page load
setViewportHeight();

// Update the height on resize
window.addEventListener('resize', () => {
    setViewportHeight();
});

// Set initial active section
document.addEventListener('DOMContentLoaded', () => {
    // Set hero as active by default
    document.getElementById('hero').classList.add('active');
    
    // Set the corresponding nav link as active
    document.querySelector('a[href="#hero"]').classList.add('active');
    
    // Trigger fade-in for the active section
    const activeSection = document.querySelector('section.active');
    if (activeSection) {
        const elements = activeSection.querySelectorAll('.fade-element');
        elements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('fade-in');
            }, 100 * index);
        });
    }
});

// Handle navigation between sections
document.querySelectorAll('.nav-link, .cta-button').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Get the target section ID
        const targetId = this.getAttribute('href');
        
        // Remove active class from all sections
        document.querySelectorAll('section').forEach(section => {
            section.classList.remove('active');
        });
        
        // Add active class to target section
        document.querySelector(targetId).classList.add('active');
        
        // Update active nav link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        
        // If it's a nav link, add active class
        if (this.classList.contains('nav-link')) {
            this.classList.add('active');
        } else {
            // If it's a CTA button, find and activate the corresponding nav link
            document.querySelector(`.nav-link[href="${targetId}"]`).classList.add('active');
        }
        
        // Close mobile menu if open
        if (navMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            navMenu.classList.remove('active');
            toggleBodyScroll(false);
        }
        
        // Add this for mobile:
        setTimeout(() => {
            setViewportHeight();
        }, 100);
    });
});

// Prevent content shift when toggling mobile menu
let scrollPosition = 0;
function toggleBodyScroll(isLocked) {
    if (isLocked) {
        scrollPosition = window.pageYOffset;
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollPosition}px`;
        document.body.style.width = '100%';
    } else {
        document.body.style.removeProperty('overflow');
        document.body.style.removeProperty('position');
        document.body.style.removeProperty('top');
        document.body.style.removeProperty('width');
    }
}

// Toggle mobile menu
mobileMenu.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
    toggleBodyScroll(navMenu.classList.contains('active'));
});

// Fade-in animation for sections when they become active
function setupFadeInObserver() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const elements = entry.target.querySelectorAll('.fade-element');
                elements.forEach((el, index) => {
                    setTimeout(() => {
                        el.classList.add('fade-in');
                    }, 100 * index);
                });
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// Add fade-in classes to elements
document.querySelectorAll('section').forEach(section => {
    const elementsToAnimate = section.querySelectorAll('h1, h2, h3, p, .card, .impact-item, .logo-item, .cta-button');
    elementsToAnimate.forEach(el => {
        el.classList.add('fade-element');
    });
});

// Setup the observer
setupFadeInObserver();

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    .fade-element {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .fade-in {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);

// Add mobile-specific adjustments

// Fix for mobile viewport height
function setMobileHeight() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    
    // Adjust active section height
    const activeSection = document.querySelector('section.active');
    if (activeSection) {
        activeSection.style.minHeight = `${window.innerHeight}px`;
    }
}

// Run on load and resize
window.addEventListener('load', setMobileHeight);
window.addEventListener('resize', setMobileHeight);
window.addEventListener('orientationchange', setMobileHeight);

// Improve mobile centering
function adjustMobileCentering() {
    const isMobile = window.innerWidth <= 768;
    const heroContent = document.querySelector('.hero-content');
    
    if (isMobile) {
        // Calculate optimal vertical position
        const windowHeight = window.innerHeight;
        const contentHeight = heroContent.offsetHeight;
        const optimalOffset = Math.max(0, (windowHeight - contentHeight - 100) / 2);
        
        // Apply optimal margin-top
        heroContent.style.marginTop = `${optimalOffset > 0 ? optimalOffset : 0}px`;
    } else {
        // Reset on desktop
        heroContent.style.marginTop = '0';
    }
}

// Run on load, resize, and orientation change
window.addEventListener('load', adjustMobileCentering);
window.addEventListener('resize', adjustMobileCentering);
window.addEventListener('orientationchange', adjustMobileCentering);

// Modal functionality for work samples
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
        
        // Prevent body scrolling
        toggleBodyScroll(true);
    });
});

// Close modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    toggleBodyScroll(false);
});

// Close modal when clicking outside of content
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        toggleBodyScroll(false);
    }
});

// Add escape key to close modal
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
        toggleBodyScroll(false);
    }
});

// Add work section to navigation
document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in animation to work cards
    const workCards = document.querySelectorAll('.work-card');
    workCards.forEach((card, index) => {
        card.classList.add('fade-element');
    });
}); 