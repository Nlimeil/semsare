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
    
    // Animate statistics numbers
    const statNumbers = document.querySelectorAll('.stat-number');
    
    function animateNumbers() {
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-count'));
            const duration = 2000; // 2 seconds
            const step = target / (duration / 16); // 60fps
            
            let current = 0;
            const increment = () => {
                current += step;
                if (current < target) {
                    stat.textContent = Math.floor(current);
                    requestAnimationFrame(increment);
                } else {
                    stat.textContent = target;
                }
            };
            
            increment();
        });
    }
    
    // Only animate when stats section is in view
    const statsSection = document.querySelector('.statistics');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumbers();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(statsSection);
    
    // Story carousel
    const stories = document.querySelectorAll('.story');
    const dots = document.querySelectorAll('.dot');
    let currentStory = 0;
    
    function showStory(index) {
        stories.forEach(story => story.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        stories[index].classList.add('active');
        dots[index].classList.add('active');
        currentStory = index;
    }
    
    document.querySelector('.next').addEventListener('click', function() {
        let nextStory = currentStory + 1;
        if (nextStory >= stories.length) nextStory = 0;
        showStory(nextStory);
    });
    
    document.querySelector('.prev').addEventListener('click', function() {
        let prevStory = currentStory - 1;
        if (prevStory < 0) prevStory = stories.length - 1;
        showStory(prevStory);
    });
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            showStory(index);
        });
    });
    
    // Auto-rotate stories every 5 seconds
    setInterval(() => {
        let nextStory = currentStory + 1;
        if (nextStory >= stories.length) nextStory = 0;
        showStory(nextStory);
    }, 5000);
    
    // Pledge button
    document.getElementById('pledgeBtn').addEventListener('click', function() {
        const checkboxes = document.querySelectorAll('.pledge-content input[type="checkbox"]');
        let allChecked = true;
        
        checkboxes.forEach(checkbox => {
            if (!checkbox.checked) {
                allChecked = false;
            }
        });
        
        if (allChecked) {
            alert('Cảm ơn bạn đã cam kết chống bạo lực học đường! Cùng nhau ch
