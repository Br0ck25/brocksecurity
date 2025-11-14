// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  
  // Mobile menu toggle
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  
  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener('click', function() {
      mobileToggle.classList.toggle('active');
      mainNav.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileToggle.classList.remove('active');
        mainNav.classList.remove('active');
      });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!mobileToggle.contains(e.target) && !mainNav.contains(e.target)) {
        mobileToggle.classList.remove('active');
        mainNav.classList.remove('active');
      }
    });
  }
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Header scroll effect
  const header = document.querySelector('.site-header');
  let lastScroll = 0;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
  });

  // Phone number formatting
  const phoneInput = document.querySelector('input[name="phone"]');
  if (phoneInput) {
    phoneInput.addEventListener('input', function(e) {
      let value = e.target.value.replace(/\D/g, '');
      if (value.length > 0) {
        if (value.length <= 3) {
          value = `(${value}`;
        } else if (value.length <= 6) {
          value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
        } else {
          value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
        }
      }
      e.target.value = value;
    });
  }

  // Form handling with Google Sheets
  const form = document.getElementById('leadForm');
  const formMsg = document.getElementById('formMsg');

  if (form && formMsg) {
    // Your Google Apps Script Web App URL
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwIfWRHrBuhFljkcLg5jwPqN8WSIdUc4IaJCDzu2zczhT1i55zm2PsZcWTapLzwuDlD/exec';

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      // Disable submit button
      const submitBtn = form.querySelector('.btn-submit');
      const originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
      submitBtn.style.opacity = '0.7';
      
      // Show loading message
      formMsg.textContent = 'Sending your request...';
      formMsg.className = 'form-message show';
      formMsg.style.background = '#d1ecf1';
      formMsg.style.color = '#0c5460';
      formMsg.style.border = '1px solid #bee5eb';
      
      const formData = new FormData(form);
      
      try {
        const response = await fetch(scriptURL, {
          method: 'POST',
          body: formData
        });
        
        const result = await response.json();
        
        if (result.result === 'success') {
          formMsg.textContent = 'Thank you! We\'ll contact you within 24 hours.';
          formMsg.className = 'form-message success show';
          form.reset();
        } else {
          throw new Error('Submission failed');
        }
      } catch (error) {
        console.error('Error:', error);
        formMsg.textContent = 'Oops! There was a problem. Please call us at (606) 275-5449.';
        formMsg.className = 'form-message show';
        formMsg.style.background = '#f8d7da';
        formMsg.style.color = '#721c24';
        formMsg.style.border = '1px solid #f5c6cb';
      } finally {
        // Re-enable submit button
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
        submitBtn.style.opacity = '1';
      }
      
      setTimeout(() => {
        formMsg.classList.remove('show');
      }, 5000);
    });
  }

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animateElements = document.querySelectorAll('.service-card, .why-card, .testimonial-card, .stat-box');
  animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // Add active state to navigation based on scroll position
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');

  function setActiveLink() {
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', setActiveLink);
  
});
