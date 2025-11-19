/**
 * @file
 * Footer Component JavaScript
 */

(function (Drupal) {
  'use strict';

  Drupal.behaviors.taraFooter = {
    attach: function (context, settings) {
      // Scroll To Top functionality.
      const scrollTopButton = context.querySelectorAll('.footer-component .scrolltop');
      
      if (scrollTopButton.length > 0) {
        // Show/hide scroll to top button based on scroll position.
        const handleScroll = function () {
          if (window.scrollY > 80) {
            scrollTopButton.forEach(function (button) {
              button.style.display = 'flex';
            });
          } else {
            scrollTopButton.forEach(function (button) {
              button.style.display = 'none';
            });
          }
        };

        // Initial check on page load.
        handleScroll();

        // Listen for scroll events.
        window.addEventListener('scroll', handleScroll);

        // Scroll to top on button click.
        scrollTopButton.forEach(function (button) {
          button.addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          });
        });
      }

      // Add empty space for fixed footer on desktop.
      const lastSection = context.querySelector('.footer-component #last-section');
      const footer = context.querySelector('.footer-component #footer');
      
      if (lastSection && footer && window.innerWidth > 767) {
        const footerHeight = footer.offsetHeight + 4;
        lastSection.style.height = footerHeight + 'px';
      }
    }
  };

})(Drupal);
