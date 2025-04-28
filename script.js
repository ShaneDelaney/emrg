// Intersection Observer for scroll animations
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            
            // Animate hamburger to X
            const spans = this.querySelectorAll('span');
            spans.forEach(span => span.classList.toggle('active'));
            
            if (spans[0].classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }
    
    // Header scroll effect
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Scroll reveal effect
    const revealElements = document.querySelectorAll('.scroll-reveal');
    
    function checkReveal() {
        const triggerBottom = window.innerHeight * 0.85;
        
        revealElements.forEach((element, index) => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < triggerBottom) {
                // Add staggered delay based on element index within its parent
                const siblings = Array.from(element.parentElement.children).filter(el => 
                    el.classList.contains('scroll-reveal')
                );
                const siblingIndex = siblings.indexOf(element);
                
                setTimeout(() => {
                    element.classList.add('revealed');
                }, siblingIndex * 150); // 150ms delay between each element
            }
        });
    }
    
    window.addEventListener('scroll', checkReveal);
    checkReveal(); // Check on initial load
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            // Close mobile menu if open
            if (mobileMenu && mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                const spans = mobileMenuBtn.querySelectorAll('span');
                spans.forEach(span => span.classList.remove('active'));
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                
                window.scrollTo({
                    top: targetPosition - headerHeight - 20,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Background color transition on scroll
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop - window.innerHeight / 2 && 
                scrollPosition < sectionTop + sectionHeight - window.innerHeight / 2) {
                
                // Add active class to current section
                section.classList.add('active');
                
                // Subtle parallax effect for active section
                const yPos = (scrollPosition - sectionTop) * 0.1;
                if (section.querySelector('.container')) {
                    section.querySelector('.container').style.transform = `translateY(${yPos}px)`;
                }
            } else {
                section.classList.remove('active');
            }
        });
    });
    
    // Animate service cards on hover
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            serviceCards.forEach(c => {
                if (c !== card) {
                    c.style.opacity = '0.7';
                    c.style.transform = 'scale(0.95)';
                }
            });
        });
        
        card.addEventListener('mouseleave', function() {
            serviceCards.forEach(c => {
                c.style.opacity = '1';
                c.style.transform = '';
            });
        });
    });
    
    // Simple fade-in animation for hero elements
    const fadeElements = document.querySelectorAll('.fade-in');
    
    setTimeout(() => {
        fadeElements.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }, 300);
    
    // Book discovery call button
    const bookCallBtn = document.querySelector('.contact-section .cta-button');
    if (bookCallBtn) {
        bookCallBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'mailto:shanedelaney11@gmail.com?subject=Discovery Call Request&body=Hi Shane, I\'d like to schedule a discovery call to discuss working together.';
        });
    }

    // Make nav links open email instead
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'mailto:shanedelaney11@gmail.com';
        });
    });
}); 