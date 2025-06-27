        // Header Scroll Effect
        window.addEventListener('scroll', function() {
            const header = document.getElementById('header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Smooth Scrolling for Anchor Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Gallery Hover Effect
        const galleryItems = document.querySelectorAll('.gallery-item');
        galleryItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.querySelector('.gallery-caption').style.transform = 'translateY(0)';
            });
            item.addEventListener('mouseleave', function() {
                this.querySelector('.gallery-caption').style.transform = 'translateY(100%)';
            });
        });

        // Animation on Scroll
        const animateOnScroll = function() {
            const elements = document.querySelectorAll('.feature-card, .gallery-item, .review-card');
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
        document.querySelectorAll('.feature-card, .gallery-item, .review-card').forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'all 0.6s ease';
        });

        window.addEventListener('scroll', animateOnScroll);
        window.addEventListener('load', animateOnScroll);

        // Product Image 3D Effect
        const productImage = document.querySelector('.hero-image img');
        window.addEventListener('mousemove', (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
            productImage.style.transform = `perspective(1000px) rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });

        // Reset image position when mouse leaves hero section
        const heroSection = document.querySelector('.hero');
        heroSection.addEventListener('mouseleave', () => {
            productImage.style.transform = 'perspective(1000px) rotateY(-15deg) rotateX(0)';
        });
