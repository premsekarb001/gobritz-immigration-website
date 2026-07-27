/**
 * GoBritz Immigration Consultancy - Advanced Interactive JS Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  // Sticky Navbar background effect on scroll
  const navbar = document.querySelector('.navbar-custom');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // Update current copyright year dynamically
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Highlight active navigation link based on current URL filename
  const navLinks = document.querySelectorAll('.nav-link-custom');
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Live Instant FAQ Filter
  const faqSearchInput = document.getElementById('faqSearchInput');
  if (faqSearchInput) {
    faqSearchInput.addEventListener('input', function() {
      const filter = this.value.toLowerCase().trim();
      const faqItems = document.querySelectorAll('.accordion-custom .accordion-item');

      faqItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(filter)) {
          item.classList.remove('d-none');
        } else {
          item.classList.add('d-none');
        }
      });
    });
  }

  // Live Blog Search & Category Tab Filtering
  const blogSearchInput = document.getElementById('blogSearchInput');
  const blogCards = document.querySelectorAll('.blog-card-item');
  const categoryBtns = document.querySelectorAll('.blog-category-btn');

  function filterBlogArticles() {
    const searchQuery = blogSearchInput ? blogSearchInput.value.toLowerCase().trim() : '';
    const activeCategoryBtn = document.querySelector('.blog-category-btn.active');
    const selectedCategory = activeCategoryBtn ? activeCategoryBtn.getAttribute('data-category') : 'all';

    blogCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      const cardText = card.textContent.toLowerCase();
      const matchesSearch = cardText.includes(searchQuery);
      const matchesCategory = selectedCategory === 'all' || cardCategory === selectedCategory;

      if (matchesSearch && matchesCategory) {
        card.classList.remove('d-none');
      } else {
        card.classList.add('d-none');
      }
    });
  }

  if (blogSearchInput) {
    blogSearchInput.addEventListener('input', filterBlogArticles);
  }

  if (categoryBtns.length > 0) {
    categoryBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        categoryBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        filterBlogArticles();
      });
    });
  }

  // Contact Form Validation & Feedback
  const contactForm = document.getElementById('contactForm');
  const alertContainer = document.getElementById('form-alert-message');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      let isValid = true;
      const requiredInputs = contactForm.querySelectorAll('[required]');

      requiredInputs.forEach(input => {
        if (!input.value.trim()) {
          isValid = false;
          input.classList.add('is-invalid');
        } else {
          input.classList.remove('is-invalid');
        }
      });

      if (alertContainer) {
        alertContainer.classList.remove('d-none');
        if (isValid) {
          alertContainer.className = 'alert alert-success mt-3';
          alertContainer.innerHTML = '<strong>Thank you!</strong> Your consultation request has been submitted. Our team in Tamil Nadu or Dubai will contact you shortly.';
          contactForm.reset();
        } else {
          alertContainer.className = 'alert alert-danger mt-3';
          alertContainer.innerHTML = '<strong>Please complete all required fields</strong> before submitting the form.';
        }
      }
    });
  }

  // Partner Network Form Validation & Feedback
  const partnerForm = document.getElementById('partnerForm');
  if (partnerForm) {
    partnerForm.addEventListener('submit', function(e) {
      e.preventDefault();
      let isValid = true;
      const requiredInputs = partnerForm.querySelectorAll('[required]');

      requiredInputs.forEach(input => {
        if (!input.value.trim()) {
          isValid = false;
          input.classList.add('is-invalid');
        } else {
          input.classList.remove('is-invalid');
        }
      });

      let partnerAlert = document.getElementById('partner-alert-message');
      if (!partnerAlert) {
        partnerAlert = document.createElement('div');
        partnerAlert.id = 'partner-alert-message';
        partnerForm.appendChild(partnerAlert);
      }

      if (isValid) {
        partnerAlert.className = 'alert alert-success mt-3';
        partnerAlert.innerHTML = '<strong>Application Received!</strong> Thank you for applying to join the GoBritz Partner Network. Our regional coordinator will reach out to you within 24 hours.';
        partnerForm.reset();
      } else {
        partnerAlert.className = 'alert alert-danger mt-3';
        partnerAlert.innerHTML = '<strong>Please complete all required fields</strong> before submitting your request.';
      }
    });
  }

  // Animated Counter Effect on Scroll
  const statNumbers = document.querySelectorAll('.stat-number');
  if (statNumbers.length > 0) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const countTo = parseInt(target.getAttribute('data-count'), 10);
          if (countTo) {
            let current = 0;
            const increment = Math.ceil(countTo / 40);
            const timer = setInterval(() => {
              current += increment;
              if (current >= countTo) {
                target.textContent = countTo + '+';
                clearInterval(timer);
              } else {
                target.textContent = current + '+';
              }
            }, 30);
          }
          obs.unobserve(target);
        }
      });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => observer.observe(stat));
  }
});
