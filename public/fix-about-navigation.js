// Fix for About button navigation
document.addEventListener('DOMContentLoaded', function() {
    // Find all About navigation links
    const aboutLinks = document.querySelectorAll('a[href="about.html"], a[href="/about.html"]');
    
    // Update their href attributes to point to index.html#about
    aboutLinks.forEach(link => {
        link.setAttribute('href', 'index.html#about');
        
        // Add click event listener to ensure proper navigation
        link.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'index.html#about';
        });
    });
    
    // Also check for any links that might be pointing to the About section incorrectly
    const potentialAboutLinks = document.querySelectorAll('a');
    potentialAboutLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && (href.includes('about') || link.textContent.toLowerCase().includes('about'))) {
            if (href !== 'index.html#about' && !href.startsWith('#about')) {
                console.log('Fixed potential about link:', href);
                link.setAttribute('href', 'index.html#about');
                
                // Add click event listener to ensure proper navigation
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    window.location.href = 'index.html#about';
                });
            }
        }
    });
    
    // Handle hash navigation when arriving at index.html#about
    if (window.location.hash === '#about') {
        // Make sure the about section is visible
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            // Scroll to the about section
            setTimeout(() => {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
                
                // Highlight the about section
                document.querySelectorAll('section').forEach(section => {
                    section.classList.remove('active');
                });
                aboutSection.classList.add('active');
                
                // Update active nav link
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                const aboutNavLink = document.querySelector('.nav-link[href="index.html#about"]');
                if (aboutNavLink) {
                    aboutNavLink.classList.add('active');
                }
            }, 100);
        }
    }
}); 