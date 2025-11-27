/**
 * @file
 * Accordion Component JavaScript
 */

(function (Drupal, once) {
  'use strict';

  Drupal.behaviors.taraAccordion = {
    attach: function (context, settings) {
      const accordions = once('taraAccordion', '.accordion-component', context);

      accordions.forEach(function (accordion) {
        const allowMultiple = accordion.getAttribute('data-allow-multiple') === 'true';
        const firstOpen = accordion.getAttribute('data-first-open') === 'true';
        const items = accordion.querySelectorAll('.accordion-item');
        const headers = accordion.querySelectorAll('.accordion-header');

        // Initialize first item if needed
        if (firstOpen && items.length > 0) {
          const firstItem = items[0];
          firstItem.classList.add('active');
        }

        // Add click handlers to headers
        headers.forEach(function (header) {
          header.addEventListener('click', function (e) {
            e.preventDefault();
            const item = this.closest('.accordion-item');
            const isActive = item.classList.contains('active');

            if (allowMultiple) {
              // Toggle this item
              item.classList.toggle('active');
            } else {
              // Close all items first
              items.forEach(function (otherItem) {
                otherItem.classList.remove('active');
              });
              // Open clicked item if it wasn't active
              if (!isActive) {
                item.classList.add('active');
              }
            }
          });
        });

        // Initialize accordion items structure if needed
        // This helps ensure proper structure for content that might be added via slots
        items.forEach(function (item) {
          const header = item.querySelector('.accordion-header');
          const content = item.querySelector('.accordion-content');

          // If structure is missing, try to create it from existing content
          if (!header && !content) {
            // Look for title and content patterns
            const titleElement = item.querySelector('h1, h2, h3, h4, h5, h6, .accordion-title');
            if (titleElement) {
              // Create header
              const newHeader = document.createElement('button');
              newHeader.className = 'accordion-header';
              newHeader.setAttribute('type', 'button');
              newHeader.setAttribute('aria-expanded', 'false');
              
              // Create icon
              const icon = document.createElement('span');
              icon.className = 'accordion-icon';
              icon.setAttribute('aria-hidden', 'true');
              
              // Create title wrapper
              const titleWrapper = document.createElement('span');
              titleWrapper.className = 'accordion-title';
              titleWrapper.innerHTML = titleElement.innerHTML;
              
              // Assemble header
              newHeader.appendChild(titleWrapper);
              newHeader.appendChild(icon);
              
              // Create content wrapper
              const newContent = document.createElement('div');
              newContent.className = 'accordion-content';
              const contentInner = document.createElement('div');
              contentInner.className = 'accordion-content-inner';
              
              // Move remaining content to content area
              const siblings = Array.from(item.childNodes);
              siblings.forEach(function (sibling) {
                if (sibling !== titleElement && sibling.nodeType === Node.ELEMENT_NODE) {
                  contentInner.appendChild(sibling.cloneNode(true));
                }
              });
              
              newContent.appendChild(contentInner);
              
              // Clear item and add new structure
              item.innerHTML = '';
              item.appendChild(newHeader);
              item.appendChild(newContent);
              
              // Remove original title
              titleElement.remove();
            }
          }

          // Update ARIA attributes
          if (header && content) {
            const itemIndex = Array.from(items).indexOf(item);
            const itemId = 'accordion-item-' + itemIndex;
            const contentId = 'accordion-content-' + itemIndex;

            header.setAttribute('id', itemId);
            header.setAttribute('aria-controls', contentId);
            header.setAttribute('aria-expanded', item.classList.contains('active') ? 'true' : 'false');
            
            content.setAttribute('id', contentId);
            content.setAttribute('role', 'region');
            content.setAttribute('aria-labelledby', itemId);
            content.setAttribute('aria-hidden', item.classList.contains('active') ? 'false' : 'true');
          }
        });

        // Update ARIA attributes when items are toggled
        const observer = new MutationObserver(function (mutations) {
          mutations.forEach(function (mutation) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
              const item = mutation.target;
              const header = item.querySelector('.accordion-header');
              const content = item.querySelector('.accordion-content');
              
              if (header && content) {
                const isActive = item.classList.contains('active');
                header.setAttribute('aria-expanded', isActive ? 'true' : 'false');
                content.setAttribute('aria-hidden', isActive ? 'false' : 'true');
              }
            }
          });
        });

        items.forEach(function (item) {
          observer.observe(item, {
            attributes: true,
            attributeFilter: ['class']
          });
        });
      });
    }
  };

})(Drupal, once);

