// Multi-page navigation script
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenu && navMenu) {
        mobileMenu.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Add this to ensure the menu is visible
            if (navMenu.classList.contains('active')) {
                navMenu.style.display = 'flex';
                navMenu.style.opacity = '1';
                navMenu.style.visibility = 'visible';
            } else {
                setTimeout(() => {
                    navMenu.style.display = '';
                    navMenu.style.opacity = '';
                    navMenu.style.visibility = '';
                }, 300);
            }
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