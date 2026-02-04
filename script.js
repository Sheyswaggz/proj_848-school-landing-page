/**
 * School Landing Page - Interactive Features
 * Implements smooth scroll navigation, mobile menu, scroll-triggered animations,
 * active navigation highlighting, and form validation
 */

(function() {
  'use strict';

  // Configuration constants
  const CONFIG = {
    scrollOffset: 80,
    throttleDelay: 100,
    revealStaggerDelay: 150,
    intersectionThreshold: 0.15,
    intersectionRootMargin: '0px 0px -100px 0px'
  };

  // Utility: Throttle function for scroll events
  function throttle(func, delay) {
    let lastCall = 0;
    return function(...args) {
      const now = Date.now();
      if (now - lastCall >= delay) {
        lastCall = now;
        func.apply(this, args);
      }
    };
  }

  // Utility: Smooth scroll to element
  function smoothScrollTo(targetId) {
    try {
      const element = document.querySelector(targetId);
      if (!element) {
        console.warn(`[ScrollNav] Target element not found: ${targetId}`);
        return;
      }

      const headerOffset = CONFIG.scrollOffset;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      console.info(`[ScrollNav] Scrolled to: ${targetId}`);
    } catch (error) {
      console.error('[ScrollNav] Error during smooth scroll:', error);
    }
  }

  // Navigation: Smooth scroll handler
  function initializeSmoothScroll() {
    try {
      const navLinks = document.querySelectorAll('nav a[href^="#"]');
      const ctaButtons = document.querySelectorAll('.cta-button[href^="#"]');
      const allScrollLinks = [...navLinks, ...ctaButtons];

      if (allScrollLinks.length === 0) {
        console.warn('[ScrollNav] No scroll links found');
        return;
      }

      allScrollLinks.forEach(link => {
        link.addEventListener('click', function(event) {
          event.preventDefault();
          const targetId = this.getAttribute('href');

          if (targetId && targetId !== '#') {
            smoothScrollTo(targetId);
          }
        });
      });

      console.info(`[ScrollNav] Initialized ${allScrollLinks.length} scroll links`);
    } catch (error) {
      console.error('[ScrollNav] Initialization failed:', error);
    }
  }

  // Navigation: Active section highlighting
  function initializeActiveNavigation() {
    try {
      const sections = document.querySelectorAll('section[id]');
      const navLinks = document.querySelectorAll('nav a[href^="#"]');

      if (sections.length === 0 || navLinks.length === 0) {
        console.warn('[ActiveNav] Sections or navigation links not found');
        return;
      }

      const handleScroll = throttle(function() {
        try {
          const scrollPosition = window.pageYOffset + CONFIG.scrollOffset + 50;

          let currentSection = '';
          sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
              currentSection = section.getAttribute('id');
            }
          });

          navLinks.forEach(link => {
            link.removeAttribute('aria-current');
            const href = link.getAttribute('href');
            if (href === `#${currentSection}`) {
              link.setAttribute('aria-current', 'page');
              link.classList.add('nav-active');
            } else {
              link.classList.remove('nav-active');
            }
          });
        } catch (error) {
          console.error('[ActiveNav] Scroll handler error:', error);
        }
      }, CONFIG.throttleDelay);

      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial call

      console.info('[ActiveNav] Initialized active navigation tracking');
    } catch (error) {
      console.error('[ActiveNav] Initialization failed:', error);
    }
  }

  // Animations: Scroll-triggered reveals with Intersection Observer
  function initializeScrollReveal() {
    try {
      // Check for Intersection Observer support
      if (!('IntersectionObserver' in window)) {
        console.warn('[ScrollReveal] IntersectionObserver not supported');
        return;
      }

      const revealElements = document.querySelectorAll('[data-reveal]');

      if (revealElements.length === 0) {
        console.info('[ScrollReveal] No reveal elements found');
        return;
      }

      // Add hidden class to elements on initialization
      revealElements.forEach(element => {
        element.classList.add('hidden');
      });

      const observerOptions = {
        threshold: CONFIG.intersectionThreshold,
        rootMargin: CONFIG.intersectionRootMargin
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            const delay = index * CONFIG.revealStaggerDelay;

            setTimeout(() => {
              entry.target.classList.remove('hidden');
              entry.target.classList.add('reveal');
              console.info('[ScrollReveal] Revealed element:', entry.target);
            }, delay);

            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      revealElements.forEach(element => {
        observer.observe(element);
      });

      console.info(`[ScrollReveal] Observing ${revealElements.length} elements`);
    } catch (error) {
      console.error('[ScrollReveal] Initialization failed:', error);
    }
  }

  // Mobile Menu: Hamburger toggle
  function initializeMobileMenu() {
    try {
      const menuButton = document.querySelector('[data-mobile-menu-button]');
      const mobileMenu = document.querySelector('[data-mobile-menu]');

      if (!menuButton || !mobileMenu) {
        console.info('[MobileMenu] Mobile menu elements not found - skipping initialization');
        return;
      }

      menuButton.addEventListener('click', function() {
        try {
          const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';

          menuButton.setAttribute('aria-expanded', !isExpanded);
          menuButton.classList.toggle('menu-open');
          mobileMenu.classList.toggle('menu-open');
          document.body.classList.toggle('menu-open');

          console.info(`[MobileMenu] Menu ${!isExpanded ? 'opened' : 'closed'}`);
        } catch (error) {
          console.error('[MobileMenu] Toggle error:', error);
        }
      });

      // Close menu when clicking on nav links
      const mobileNavLinks = mobileMenu.querySelectorAll('a');
      mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
          menuButton.setAttribute('aria-expanded', 'false');
          menuButton.classList.remove('menu-open');
          mobileMenu.classList.remove('menu-open');
          document.body.classList.remove('menu-open');
        });
      });

      console.info('[MobileMenu] Initialized mobile menu');
    } catch (error) {
      console.error('[MobileMenu] Initialization failed:', error);
    }
  }

  // Form Validation: Contact form
  function initializeFormValidation() {
    try {
      const contactForm = document.querySelector('.contact__form');

      if (!contactForm) {
        console.info('[FormValidation] Contact form not found');
        return;
      }

      // Email validation regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      // Validate single field
      function validateField(field) {
        const value = field.value.trim();
        const fieldName = field.getAttribute('name');
        let isValid = true;
        let errorMessage = '';

        // Clear previous error
        clearFieldError(field);

        // Required field validation
        if (field.hasAttribute('required') && value === '') {
          isValid = false;
          errorMessage = `${getFieldLabel(field)} is required`;
        }
        // Email validation
        else if (field.type === 'email' && value !== '' && !emailRegex.test(value)) {
          isValid = false;
          errorMessage = 'Please enter a valid email address';
        }
        // Select validation
        else if (field.tagName === 'SELECT' && field.hasAttribute('required') && value === '') {
          isValid = false;
          errorMessage = 'Please select an option';
        }

        if (!isValid) {
          showFieldError(field, errorMessage);
          field.setAttribute('aria-invalid', 'true');
        } else {
          field.setAttribute('aria-invalid', 'false');
        }

        return isValid;
      }

      // Get field label text
      function getFieldLabel(field) {
        const label = document.querySelector(`label[for="${field.id}"]`);
        if (label) {
          return label.textContent.replace('*', '').trim();
        }
        return field.getAttribute('name') || 'This field';
      }

      // Show field error
      function showFieldError(field, message) {
        const formGroup = field.closest('.contact__form-group');
        if (!formGroup) return;

        let errorElement = formGroup.querySelector('.field-error');
        if (!errorElement) {
          errorElement = document.createElement('span');
          errorElement.className = 'field-error error';
          errorElement.setAttribute('role', 'alert');
          errorElement.setAttribute('aria-live', 'polite');
          formGroup.appendChild(errorElement);
        }

        errorElement.textContent = message;
        field.classList.add('error');
      }

      // Clear field error
      function clearFieldError(field) {
        const formGroup = field.closest('.contact__form-group');
        if (!formGroup) return;

        const errorElement = formGroup.querySelector('.field-error');
        if (errorElement) {
          errorElement.remove();
        }
        field.classList.remove('error');
        field.classList.remove('success');
      }

      // Show field success
      function showFieldSuccess(field) {
        field.classList.add('success');
      }

      // Real-time validation on blur
      const formFields = contactForm.querySelectorAll('input, select, textarea');
      formFields.forEach(field => {
        field.addEventListener('blur', function() {
          if (this.value.trim() !== '') {
            const isValid = validateField(this);
            if (isValid) {
              showFieldSuccess(this);
            }
          }
        });

        // Clear error on input
        field.addEventListener('input', function() {
          if (this.classList.contains('error')) {
            clearFieldError(this);
            this.setAttribute('aria-invalid', 'false');
          }
        });
      });

      // Form submission
      contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        try {
          let isFormValid = true;
          const formData = new FormData(contactForm);
          const formValues = {};

          // Validate all fields
          formFields.forEach(field => {
            const isFieldValid = validateField(field);
            if (!isFieldValid) {
              isFormValid = false;
            }
          });

          if (isFormValid) {
            // Collect form data
            for (let [key, value] of formData.entries()) {
              formValues[key] = value;
            }

            console.info('[FormValidation] Form validation passed:', formValues);

            // Show success message
            showFormSuccess();

            // Reset form after short delay
            setTimeout(() => {
              contactForm.reset();
              formFields.forEach(field => {
                field.setAttribute('aria-invalid', 'false');
                field.classList.remove('success');
              });
            }, 2000);
          } else {
            console.warn('[FormValidation] Form validation failed');
            // Focus first invalid field
            const firstInvalid = contactForm.querySelector('[aria-invalid="true"]');
            if (firstInvalid) {
              firstInvalid.focus();
            }
          }
        } catch (error) {
          console.error('[FormValidation] Form submission error:', error);
          showFormError();
        }
      });

      // Show form success message
      function showFormSuccess() {
        const existingMessage = contactForm.querySelector('.form-message');
        if (existingMessage) {
          existingMessage.remove();
        }

        const successMessage = document.createElement('div');
        successMessage.className = 'form-message success';
        successMessage.setAttribute('role', 'status');
        successMessage.setAttribute('aria-live', 'polite');
        successMessage.textContent = 'Thank you! Your message has been sent successfully.';

        contactForm.insertBefore(successMessage, contactForm.firstChild);

        setTimeout(() => {
          successMessage.remove();
        }, 5000);
      }

      // Show form error message
      function showFormError() {
        const existingMessage = contactForm.querySelector('.form-message');
        if (existingMessage) {
          existingMessage.remove();
        }

        const errorMessage = document.createElement('div');
        errorMessage.className = 'form-message error';
        errorMessage.setAttribute('role', 'alert');
        errorMessage.setAttribute('aria-live', 'assertive');
        errorMessage.textContent = 'Sorry, there was an error. Please try again.';

        contactForm.insertBefore(errorMessage, contactForm.firstChild);

        setTimeout(() => {
          errorMessage.remove();
        }, 5000);
      }

      console.info('[FormValidation] Initialized form validation');
    } catch (error) {
      console.error('[FormValidation] Initialization failed:', error);
    }
  }

  // Initialize all features when DOM is ready
  function initialize() {
    console.info('[SchoolLandingPage] Initializing interactive features...');

    try {
      initializeSmoothScroll();
      initializeActiveNavigation();
      initializeScrollReveal();
      initializeMobileMenu();
      initializeFormValidation();

      console.info('[SchoolLandingPage] All features initialized successfully');
    } catch (error) {
      console.error('[SchoolLandingPage] Initialization error:', error);
    }
  }

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
  } else {
    initialize();
  }

})();
