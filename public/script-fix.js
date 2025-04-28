// Modern animation and interaction script
document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations
    initAnimations();
    
    // Handle header scroll effect
    initHeaderScroll();
    
    // Initialize metrics animation
    animateMetrics();
    
    // Mobile menu toggle
    initMobileMenu();
    
    // Modal functionality
    initModalFunctionality();
    
    // Make sure all sections are visible
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'block';
    });
});

// Initialize animations with modern approach
function initAnimations() {
    // Use Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Elements to animate
    const animateElements = document.querySelectorAll('.animate');
    animateElements.forEach(el => {
        observer.observe(el);
    });
    
    // Add animation classes to elements
    document.querySelectorAll('h1, h2, h3, p, .card, .client-card, .work-card, .service-card, .cta-button').forEach((el, index) => {
        if (!el.classList.contains('animate')) {
            el.classList.add('animate', 'fade-up');
            el.style.animationDelay = `${index * 0.1}s`;
        }
    });
    
    // Add staggered animations to lists
    document.querySelectorAll('ul, ol').forEach(list => {
        list.querySelectorAll('li').forEach((item, index) => {
            item.classList.add('animate', 'fade-right');
            item.style.animationDelay = `${0.3 + (index * 0.1)}s`;
        });
    });
    
    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        .animate {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), 
                        transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .fade-up {
            transform: translateY(30px);
        }
        
        .fade-right {
            transform: translateX(-20px);
        }
        
        .fade-left {
            transform: translateX(20px);
        }
        
        .zoom-in {
            transform: scale(0.9);
        }
        
        .in-view {
            opacity: 1;
            transform: translate(0) scale(1);
        }
    `;
    document.head.appendChild(style);
}

// Header scroll effect
function initHeaderScroll() {
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Mobile menu functionality
function initMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenu && navMenu) {
        mobileMenu.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
        
        // Close menu when clicking a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
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
                
                // Show the modal with animation
                modal.style.display = 'block';
                setTimeout(() => {
                    modal.classList.add('active');
                }, 10);
                
                document.body.style.overflow = 'hidden';
            });
        });
        
        if (closeModal) {
            closeModal.addEventListener('click', function() {
                modal.classList.remove('active');
                setTimeout(() => {
                    modal.style.display = 'none';
                }, 300);
                document.body.style.overflow = '';
            });
        }
        
        // Close modal when clicking outside of content
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.classList.remove('active');
                setTimeout(() => {
                    modal.style.display = 'none';
                }, 300);
                document.body.style.overflow = '';
            }
        });
    }
}

// Animate metrics when they come into view
function animateMetrics() {
    const metricNumbers = document.querySelectorAll('.metric-number');
    
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
    
    // Check on scroll and on load
    window.addEventListener('scroll', checkMetrics);
    checkMetrics();
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