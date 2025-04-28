// Multi-page navigation script
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    const body = document.body;
    
    if (mobileMenu && navMenu) {
        mobileMenu.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent event from bubbling up
            mobileMenu.classList.toggle('active');
            navMenu.classList.toggle('active');
            body.classList.toggle('menu-open');
        });
        
        // Close menu when clicking a nav link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
                navMenu.classList.remove('active');
                body.classList.remove('menu-open');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideMenu = navMenu.contains(event.target);
            const isClickOnToggle = mobileMenu.contains(event.target);
            
            if (!isClickInsideMenu && !isClickOnToggle && navMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                navMenu.classList.remove('active');
                body.classList.remove('menu-open');
            }
        });
        
        // Prevent clicks inside the menu from closing it
        navMenu.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
    
    // Handle modal functionality if present
    initModalFunctionality();
    
    // Add fade-in animations for page elements
    const elementsToAnimate = document.querySelectorAll('h1, h2, h3, p, .card, .cta-button, .about-content, .service-card');
    elementsToAnimate.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        // Stagger the animation
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 100 * index);
    });
    
    // Add viewport height fix for mobile browsers
    function setMobileVH() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    
    // Set on load
    setMobileVH();
    
    // Update on resize and orientation change
    window.addEventListener('resize', setMobileVH);
    window.addEventListener('orientationchange', setMobileVH);
});

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
                document.body.classList.add('menu-open'); // Prevent background scrolling
                
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
                    document.body.classList.remove('menu-open'); // Re-enable scrolling
                }, 300);
            });
        }
        
        // Close modal when clicking outside of content
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.classList.remove('active');
                setTimeout(() => {
                    modal.style.display = 'none';
                    document.body.classList.remove('menu-open'); // Re-enable scrolling
                }, 300);
            }
        });
    }
} 