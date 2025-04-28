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

// Modern navigation script
document.addEventListener('DOMContentLoaded', function() {
    // Set initial active section
    const initialSection = window.location.hash ? 
        document.querySelector(window.location.hash) : 
        document.getElementById('hero');
    
    if (initialSection) {
        // Remove active class from all sections
        document.querySelectorAll('section').forEach(section => {
            section.classList.remove('active');
        });
        
        // Add active class to initial section
        initialSection.classList.add('active');
        
        // Update active nav link
        const activeNavLink = document.querySelector(`.nav-link[href="${window.location.hash || '#hero'}"]`);
        if (activeNavLink) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            activeNavLink.classList.add('active');
        }
    }
    
    // Initialize animations
    initAnimations();
    
    // Mobile menu toggle
    initMobileMenu();
    
    // Modal functionality
    initModalFunctionality();
    
    // Handle navigation between sections
    initNavigation();
    
    // Fix for mobile viewport height issues (iOS Safari)
    setViewportHeight();
    window.addEventListener('resize', setViewportHeight);
    window.addEventListener('orientationchange', setViewportHeight);
    
    // Improve mobile centering
    adjustMobileCentering();
    window.addEventListener('resize', adjustMobileCentering);
    window.addEventListener('orientationchange', adjustMobileCentering);
    
    // Initialize metrics animation
    animateMetrics();
});

// Initialize animations
function initAnimations() {
    // Add animation classes to elements in the active section
    const activeSection = document.querySelector('section.active');
    if (activeSection) {
        const elements = activeSection.querySelectorAll('h1, h2, h3, p, .cta-button');
        elements.forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            
            // Stagger the animation
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, 100 * index);
        });
    }
}

// Mobile menu functionality
function initMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenu && navMenu) {
        mobileMenu.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
}

// Modal functionality
function initModalFunctionality() {
    const modal = document.getElementById('sample-modal');
    const sampleButtons = document.querySelectorAll('.view-sample');
    const closeModal = document.querySelector('.close-modal');
    
    if (modal && sampleButtons.length > 0) {
        sampleButtons.forEach(button => {
            button.addEventListener('click', function() {
                const sampleType = this.getAttribute('data-sample');
                
                // Hide all preview content first
                document.querySelectorAll('.preview-content').forEach(content => {
                    content.style.display = 'none';
                });
                
                // Show the selected preview
                const selectedPreview = document.getElementById(`${sampleType}-preview`);
                if (selectedPreview) {
                    selectedPreview.style.display = 'block';
                }
                
                // Show the modal
                modal.style.display = 'block';
                setTimeout(() => {
                    modal.classList.add('active');
                }, 10);
            });
        });
        
        if (closeModal) {
            closeModal.addEventListener('click', function() {
                modal.classList.remove('active');
                setTimeout(() => {
                    modal.style.display = 'none';
                }, 300);
            });
        }
        
        // Close modal when clicking outside of content
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.classList.remove('active');
                setTimeout(() => {
                    modal.style.display = 'none';
                }, 300);
            }
        });
    }
}

// Handle navigation between sections
function initNavigation() {
    // Handle all navigation links and buttons
    document.querySelectorAll('a[href^="#"], .cta-button[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            // Only handle internal links (those starting with #)
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                
                // Get the target section ID
                const targetId = href;
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    // Remove active class from all sections
                    document.querySelectorAll('section').forEach(section => {
                        section.classList.remove('active');
                    });
                    
                    // Add active class to target section
                    targetSection.classList.add('active');
                    
                    // Update active nav link
                    document.querySelectorAll('.nav-link').forEach(link => {
                        link.classList.remove('active');
                    });
                    
                    // If it's a nav link, add active class
                    if (this.classList.contains('nav-link')) {
                        this.classList.add('active');
                    } else {
                        // If it's a CTA button, find and activate the corresponding nav link
                        const correspondingLink = document.querySelector(`.nav-link[href="${targetId}"]`);
                        if (correspondingLink) {
                            correspondingLink.classList.add('active');
                        }
                    }
                    
                    // Close mobile menu if open
                    const mobileMenu = document.getElementById('mobile-menu');
                    const navMenu = document.querySelector('.nav-menu');
                    if (navMenu && navMenu.classList.contains('active')) {
                        mobileMenu.classList.remove('active');
                        navMenu.classList.remove('active');
                    }
                    
                    // Update URL hash without scrolling
                    history.pushState(null, null, targetId);
                    
                    // Run animations for the new section
                    initAnimations();
                    
                    // Check metrics if applicable
                    if (typeof checkMetrics === 'function') {
                        checkMetrics();
                    }
                }
            }
            // For external links or links to other pages, let the browser handle it normally
        });
    });
    
    // Handle navigation menu links to other pages (not hash links)
    document.querySelectorAll('a:not([href^="#"])').forEach(link => {
        // We don't need to add event listeners for these links
        // Let the browser handle them normally
    });
}

// Animate metrics when they come into view
function animateMetrics() {
    const metricNumbers = document.querySelectorAll('.metric-number');
    
    if (metricNumbers.length === 0) return;
    
    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    }
    
    // Function to animate counting up
    function animateValue(element, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            let value = Math.floor(progress * (end - start) + start);
            
            // Add appropriate suffix (M+, %, etc.)
            if (element.textContent.includes('M+')) {
                element.textContent = value + 'M+';
            } else if (element.textContent.includes('%')) {
                element.textContent = value + '%';
            } else {
                element.textContent = value;
            }
            
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }
    
    // Check which metrics are visible and animate them
    function checkMetrics() {
        metricNumbers.forEach(metric => {
            if (isInViewport(metric) && !metric.classList.contains('animated')) {
                // Parse the number from the text (removing M+, %, etc.)
                const endValue = parseInt(metric.textContent.replace(/\D/g, ''));
                // Start from 0 and animate to the target value
                animateValue(metric, 0, endValue, 1500);
                metric.classList.add('animated');
            }
        });
    }
    
    // Check on section change
    document.querySelectorAll('.nav-link, .cta-button').forEach(anchor => {
        anchor.addEventListener('click', checkMetrics);
    });
    
    // Initial check
    checkMetrics();
    
    // Make the function available globally
    window.checkMetrics = checkMetrics;
}

// Smooth scroll to section when clicking nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            e.preventDefault();
            
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
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
    
    if (heroContent && isMobile) {
        // Calculate optimal vertical position
        const windowHeight = window.innerHeight;
        const contentHeight = heroContent.offsetHeight;
        const optimalOffset = Math.max(0, (windowHeight - contentHeight - 100) / 2);
        
        // Apply optimal margin-top
        heroContent.style.marginTop = `${optimalOffset > 0 ? optimalOffset : 0}px`;
    } else if (heroContent) {
        // Reset on desktop
        heroContent.style.marginTop = '0';
    }
} 