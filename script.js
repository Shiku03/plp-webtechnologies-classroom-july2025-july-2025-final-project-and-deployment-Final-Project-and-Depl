
        // Page Navigation
        function showPage(pageName) {
            // Hide all pages
            const pages = document.querySelectorAll('.page');
            pages.forEach(page => page.classList.remove('active'));
            
            // Show selected page
            document.getElementById(pageName).classList.add('active');
            
            // Update navigation links
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => link.classList.remove('active'));
            
            // Find and activate the clicked link
            navLinks.forEach(link => {
                if (link.textContent.toLowerCase() === pageName) {
                    link.classList.add('active');
                }
            });
            
            // Close mobile menu if open
            document.getElementById('navLinks').classList.remove('active');
            
            // Scroll to top
            window.scrollTo(0, 0);
        }

        // Mobile Menu Toggle
        function toggleMobileMenu() {
            const navLinks = document.getElementById('navLinks');
            navLinks.classList.toggle('active');
        }

        // Header Scroll Effect
        window.addEventListener('scroll', function() {
            const header = document.getElementById('header');
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Restaurant Menu Filter
        function filterMenu(category) {
            const menuItems = document.querySelectorAll('.menu-item');
            const menuBtns = document.querySelectorAll('.menu-btn');
            
            // Update active button
            menuBtns.forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
            
            // Filter items
            menuItems.forEach(item => {
                if (category === 'all' || item.dataset.category === category) {
                    item.classList.add('show');
                } else {
                    item.classList.remove('show');
                }
            });
        }

        // Contact Form Validation and Submission
        function submitForm() {
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const phone = document.getElementById('phone');
            const message = document.getElementById('message');
            
            let isValid = true;
            
            // Reset errors
            document.querySelectorAll('.form-group').forEach(group => {
                group.classList.remove('error');
            });
            
            // Validate name
            if (name.value.trim() === '') {
                name.parentElement.classList.add('error');
                isValid = false;
            }
            
            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value.trim())) {
                email.parentElement.classList.add('error');
                isValid = false;
            }
            
            // Validate phone
            if (phone.value.trim() === '') {
                phone.parentElement.classList.add('error');
                isValid = false;
            }
            
            // Validate message
            if (message.value.trim() === '') {
                message.parentElement.classList.add('error');
                isValid = false;
            }
            
            // If form is valid, show success message
            if (isValid) {
                document.getElementById('successMessage').classList.add('show');
                
                // Clear form
                name.value = '';
                email.value = '';
                phone.value = '';
                message.value = '';
                
                // Hide success message after 3 seconds
                setTimeout(() => {
                    document.getElementById('successMessage').classList.remove('show');
                }, 3000);
            }
        }

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const nav = document.querySelector('nav');
            const menuBtn = document.getElementById('mobileMenuBtn');
            const navLinks = document.getElementById('navLinks');
            
            if (!nav.contains(event.target) && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
   