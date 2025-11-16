/**
 * @file
 * Header Component JavaScript
 */

(function (Drupal) {
  'use strict';

  Drupal.behaviors.taraHeader = {
    attach: function (context, settings) {
      // Mobile menu toggle.
      const mobileMenu = context.querySelectorAll('.header-component .mobile-menu');
      mobileMenu.forEach(function (menu) {
        menu.addEventListener('click', function () {
          this.classList.toggle('menu-icon-active');
          const menuWrapper = this.nextElementSibling;
          if (menuWrapper && menuWrapper.classList.contains('primary-menu-wrapper')) {
            menuWrapper.classList.toggle('active-menu');
          }
        });
      });

      // Close mobile menu.
      const closeMenu = context.querySelectorAll('.header-component .close-mobile-menu');
      closeMenu.forEach(function (close) {
        close.addEventListener('click', function () {
          const menuWrapper = this.closest('.primary-menu-wrapper');
          if (menuWrapper) {
            menuWrapper.classList.remove('active-menu');
          }
          const mobileMenu = context.querySelector('.header-component .mobile-menu');
          if (mobileMenu) {
            mobileMenu.classList.remove('menu-icon-active');
          }
        });
      });

      // Full page search toggle.
      const searchIcon = context.querySelectorAll('.header-component .search-icon');
      searchIcon.forEach(function (icon) {
        icon.addEventListener('click', function (e) {
          e.preventDefault();
          const searchBox = this.parentElement.querySelector('.search-box');
          if (searchBox) {
            searchBox.style.display = 'flex';
          }
        });
      });

      // Close search box.
      const searchBoxClose = context.querySelectorAll('.header-component .search-box-close');
      searchBoxClose.forEach(function (close) {
        close.addEventListener('click', function (e) {
          e.preventDefault();
          const searchBox = this.closest('.search-box');
          if (searchBox) {
            searchBox.style.display = 'none';
          }
        });
      });
    }
  };

})(Drupal);
