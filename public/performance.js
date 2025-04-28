// Performance optimizations
document.addEventListener('DOMContentLoaded', function() {
    // Lazy load images
    const lazyImages = document.querySelectorAll('img[data-src]');
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        });
    }
    
    // Optimize animations
    const animatedElements = document.querySelectorAll('.fade-in, .fade-element');
    if ('IntersectionObserver' in window) {
        const animationObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    animationObserver.unobserve(entry.target);
                }
            });
        });
        
        animatedElements.forEach(el => {
            animationObserver.observe(el);
        });
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        animatedElements.forEach(el => {
            el.classList.add('visible');
        });
    }
    
    // Smooth page transitions
    document.querySelectorAll('a').forEach(link => {
        // Only handle internal links
        if (link.hostname === window.location.hostname) {
            link.addEventListener('click', function(e) {
                // Don't handle hash links or links with target attribute
                if (link.getAttribute('target') || link.hash) {
                    return;
                }
                
                e.preventDefault();
                
                // Add exit animation
                document.body.classList.add('page-transition-out');
                
                // Navigate after animation completes
                setTimeout(() => {
                    window.location.href = link.href;
                }, 300);
            });
        }
    });
    
    // Add entrance animation
    document.body.classList.add('page-transition-in');
    setTimeout(() => {
        document.body.classList.remove('page-transition-in');
    }, 500);
}); 