// Comprehensive navigation fix
document.addEventListener('DOMContentLoaded', function() {
    // Define the correct navigation structure
    const correctNavigation = [
        { text: 'Home', href: 'index.html', id: 'home' },
        { text: 'About', href: 'about.html', id: 'about' },
        { text: 'Services', href: 'services.html', id: 'services' },
        { text: 'Clients', href: 'index.html#clients', id: 'clients' },
        { text: 'Contact', href: 'index.html#contact', id: 'contact' }
    ];
    
    // Get current page path
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    
    // Fix all navigation menus
    const navMenus = document.querySelectorAll('.nav-menu');
    navMenus.forEach(menu => {
        // Clear existing items if needed
        if (menu.children.length !== correctNavigation.length) {
            menu.innerHTML = '';
            
            // Rebuild the navigation
            correctNavigation.forEach(item => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = item.href;
                a.className = 'nav-link';
                a.textContent = item.text;
                
                // Set active class for current page
                if ((currentPath === item.href) || 
                    (currentPath === '' && item.href === 'index.html') ||
                    (window.location.hash === `#${item.id}`)) {
                    a.classList.add('active');
                }
                
                li.appendChild(a);
                menu.appendChild(li);
            });
        } else {
            // Just fix the hrefs and active states
            const links = menu.querySelectorAll('.nav-link');
            links.forEach((link, index) => {
                if (index < correctNavigation.length) {
                    link.href = correctNavigation[index].href;
                    link.textContent = correctNavigation[index].text;
                    
                    // Reset active state
                    link.classList.remove('active');
                    
                    // Set active class for current page
                    if ((currentPath === correctNavigation[index].href) || 
                        (currentPath === '' && correctNavigation[index].href === 'index.html') ||
                        (window.location.hash === `#${correctNavigation[index].id}`)) {
                        link.classList.add('active');
                    }
                }
            });
        }
    });
    
    // Fix all CTA buttons that might link to sections
    document.querySelectorAll('.cta-button').forEach(button => {
        const href = button.getAttribute('href');
        if (href && href.startsWith('#')) {
            // It's an internal link, make sure it works
            const targetId = href.substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // The target exists on this page, keep it as is
            } else {
                // The target might be on another page, fix it
                const navItem = correctNavigation.find(item => item.id === targetId);
                if (navItem) {
                    button.href = navItem.href;
                }
            }
        }
    });
    
    // Handle hash navigation
    if (window.location.hash) {
        const targetId = window.location.hash.substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            // Scroll to the section after a short delay
            setTimeout(() => {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                
                // Update active states
                document.querySelectorAll('section').forEach(section => {
                    section.classList.remove('active');
                });
                targetSection.classList.add('active');
                
                // Update active nav link
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').includes(targetId)) {
                        link.classList.add('active');
                    }
                });
            }, 100);
        }
    }
    
    // Make sure the logo links to the homepage
    const logoLinks = document.querySelectorAll('.logo');
    logoLinks.forEach(logo => {
        if (logo.tagName !== 'A') {
            // If the logo is not already an anchor, wrap it in one
            const parent = logo.parentNode;
            const anchor = document.createElement('a');
            anchor.href = 'index.html';
            anchor.className = 'logo';
            anchor.innerHTML = logo.innerHTML;
            parent.replaceChild(anchor, logo);
        } else if (!logo.hasAttribute('href')) {
            // If it's an anchor but missing the href
            logo.setAttribute('href', 'index.html');
        }
    });
}); 