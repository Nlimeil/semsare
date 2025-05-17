document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const navUl = document.querySelector('nav ul');
    
    mobileMenuBtn.addEventListener('click', function() {
        navUl.classList.toggle('show');
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            navUl.classList.remove('show');
        });
    });
    
    // Form submission
    const helpForm = document.getElementById('helpForm');
    if (helpForm) {
        helpForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Cảm ơn bạn đã gửi yêu cầu hỗ trợ. Chúng tôi sẽ liên hệ với bạn sớm nhất có thể.');
            this.reset();
        });
    }
    
    // Animation for elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.violence-type, .cause-card, .effect-item, .step');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animated elements
    const animatedElements = document.querySelectorAll('.violence-type, .cause-card, .effect-item, .step');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load
});
