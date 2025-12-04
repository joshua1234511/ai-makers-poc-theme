/**
 * @file
 * Modal Component JavaScript
 */

(function (Drupal, once) {
  "use strict";

  Drupal.behaviors.taraModal = {
    attach: function (context, settings) {
      const modalComponents = once("taraModal", ".modal-component", context);

      modalComponents.forEach(function (component) {
        const modalId = component.getAttribute("data-modal-id");
        const closeOnBackdrop =
          component.getAttribute("data-close-on-backdrop") === "true";
        const overlay = component.querySelector(".modal-overlay");
        const trigger = component.querySelector(
          '.modal-trigger, [data-modal-target="' + modalId + '"]'
        );
        const closeButton = component.querySelector(
          '[data-modal-close="' + modalId + '"]'
        );
        const backdrop = component.querySelector(".modal-backdrop");
        const modalContent = component.querySelector(".modal-content");

        if (!overlay || !modalId) {
          return;
        }

        // Function to open modal
        const openModal = function () {
          overlay.classList.add("active");
          overlay.setAttribute("aria-hidden", "false");
          document.body.classList.add("modal-open");

          // Focus management
          const focusableElements = overlay.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          const firstFocusable = focusableElements[0];
          if (firstFocusable) {
            firstFocusable.focus();
          }

          // Update trigger aria-expanded
          if (trigger) {
            trigger.setAttribute("aria-expanded", "true");
          }
        };

        // Function to close modal
        const closeModal = function () {
          overlay.classList.remove("active");
          overlay.setAttribute("aria-hidden", "true");
          document.body.classList.remove("modal-open");

          // Return focus to trigger
          if (trigger) {
            trigger.focus();
            trigger.setAttribute("aria-expanded", "false");
          }
        };

        // Open modal on trigger click
        if (trigger) {
          trigger.addEventListener("click", function (e) {
            e.preventDefault();
            openModal();
          });
        }

        // Close modal on close button click
        if (closeButton) {
          closeButton.addEventListener("click", function (e) {
            e.preventDefault();
            closeModal();
          });
        }

        // Close modal on backdrop click
        if (closeOnBackdrop && backdrop) {
          backdrop.addEventListener("click", function (e) {
            if (e.target === backdrop) {
              closeModal();
            }
          });
        }

        // Close modal on Escape key
        overlay.addEventListener("keydown", function (e) {
          if (e.key === "Escape" && overlay.classList.contains("active")) {
            closeModal();
          }
        });

        // Focus trap: Keep focus within modal when open
        overlay.addEventListener("keydown", function (e) {
          if (!overlay.classList.contains("active")) {
            return;
          }

          if (e.key === "Tab") {
            const focusableElements = overlay.querySelectorAll(
              'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            const firstFocusable = focusableElements[0];
            const lastFocusable =
              focusableElements[focusableElements.length - 1];

            if (e.shiftKey) {
              // Shift + Tab
              if (document.activeElement === firstFocusable) {
                e.preventDefault();
                lastFocusable.focus();
              }
            } else {
              // Tab
              if (document.activeElement === lastFocusable) {
                e.preventDefault();
                firstFocusable.focus();
              }
            }
          }
        });

        // Initialize ARIA attributes
        if (overlay) {
          overlay.setAttribute("aria-hidden", "true");
        }

        // Close all modals when clicking outside (if multiple modals exist)
        document.addEventListener("click", function (e) {
          const clickedModal = e.target.closest(".modal-component");
          if (!clickedModal && document.body.classList.contains("modal-open")) {
            // Check if click is outside any modal
            const allModals = document.querySelectorAll(
              ".modal-overlay.active"
            );
            allModals.forEach(function (activeOverlay) {
              if (!activeOverlay.contains(e.target)) {
                const modalComponent =
                  activeOverlay.closest(".modal-component");
                if (modalComponent) {
                  const closeOnBackdropAttr = modalComponent.getAttribute(
                    "data-close-on-backdrop"
                  );
                  if (closeOnBackdropAttr === "true") {
                    activeOverlay.classList.remove("active");
                    activeOverlay.setAttribute("aria-hidden", "true");
                    document.body.classList.remove("modal-open");
                  }
                }
              }
            });
          }
        });
      });
    },
  };
})(Drupal, once);
