/**
 * @file
 * Testimonial Slider Component JavaScript
 */

(function (Drupal) {
  'use strict';

  Drupal.behaviors.taraTestimonialSlider = {
    attach: function (context, settings) {
      const sliders = context.querySelectorAll('.testimonial-slider');
      
      sliders.forEach(function (slider) {
        // Skip if already initialized
        if (slider.dataset.initialized === 'true') {
          return;
        }
        
        slider.dataset.initialized = 'true';
        
        const track = slider.querySelector('.testimonial-slider-track');
        const items = track.querySelectorAll('.testimonial-item');
        const dotsContainer = slider.querySelector('.testimonial-slider-dots');
        const prevButton = slider.querySelector('.testimonial-slider-prev');
        const nextButton = slider.querySelector('.testimonial-slider-next');
        const autoplay = slider.dataset.autoplay === 'true';
        const autoplaySpeed = parseInt(slider.dataset.autoplaySpeed) || 5000;
        const transition = slider.dataset.transition || 'fade';
        
        if (items.length === 0) {
          return;
        }
        
        let currentIndex = 0;
        let autoplayInterval = null;
        
        // Initialize: show first item
        items[0].classList.add('active');
        
        // Create dots if enabled
        if (dotsContainer && items.length > 1) {
          items.forEach(function (item, index) {
            const dot = document.createElement('button');
            dot.type = 'button';
            dot.className = 'testimonial-slider-dot' + (index === 0 ? ' active' : '');
            dot.setAttribute('aria-label', 'Go to testimonial ' + (index + 1));
            dot.setAttribute('role', 'tab');
            dot.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
            
            dot.addEventListener('click', function () {
              goToSlide(index);
            });
            
            dotsContainer.appendChild(dot);
          });
        }
        
        // Go to specific slide
        function goToSlide(index) {
          if (index < 0 || index >= items.length) {
            return;
          }
          
          // Remove active class from all items
          items.forEach(function (item) {
            item.classList.remove('active', 'prev');
          });
          
          // Update dots
          const dots = slider.querySelectorAll('.testimonial-slider-dot');
          if (dots) {
            dots.forEach(function (dot, dotIndex) {
              dot.classList.remove('active');
              dot.setAttribute('aria-selected', 'false');
              if (dotIndex === index) {
                dot.classList.add('active');
                dot.setAttribute('aria-selected', 'true');
              }
            });
          }
          
          // Handle transition effects
          if (transition === 'slide' || transition === 'slide-fade') {
            const prevIndex = currentIndex;
            if (index < prevIndex) {
              items[index].classList.add('prev');
            }
          }
          
          // Add active class to current item
          items[index].classList.add('active');
          currentIndex = index;
          
          // Reset autoplay
          if (autoplay) {
            resetAutoplay();
          }
        }
        
        // Next slide
        function nextSlide() {
          const nextIndex = (currentIndex + 1) % items.length;
          goToSlide(nextIndex);
        }
        
        // Previous slide
        function prevSlide() {
          const prevIndex = (currentIndex - 1 + items.length) % items.length;
          goToSlide(prevIndex);
        }
        
        // Start autoplay
        function startAutoplay() {
          if (!autoplay || items.length <= 1) {
            return;
          }
          
          autoplayInterval = setInterval(function () {
            nextSlide();
          }, autoplaySpeed);
        }
        
        // Reset autoplay
        function resetAutoplay() {
          if (autoplayInterval) {
            clearInterval(autoplayInterval);
          }
          startAutoplay();
        }
        
        // Pause autoplay on hover
        slider.addEventListener('mouseenter', function () {
          if (autoplayInterval) {
            clearInterval(autoplayInterval);
          }
        });
        
        slider.addEventListener('mouseleave', function () {
          if (autoplay) {
            startAutoplay();
          }
        });
        
        // Navigation button handlers
        if (nextButton) {
          nextButton.addEventListener('click', function (e) {
            e.preventDefault();
            nextSlide();
          });
        }
        
        if (prevButton) {
          prevButton.addEventListener('click', function (e) {
            e.preventDefault();
            prevSlide();
          });
        }
        
        // Keyboard navigation
        slider.addEventListener('keydown', function (e) {
          if (e.key === 'ArrowLeft') {
            e.preventDefault();
            prevSlide();
          } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            nextSlide();
          }
        });
        
        // Start autoplay
        startAutoplay();
      });
    }
  };

})(Drupal);
