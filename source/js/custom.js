(function ($) {
  "use strict";

  $(document).ready(function () {
    // Get current page URL
    var url = window.location.pathname;

    // remove active class from all items
    $('.nav-item').removeClass('active');

    // Add 'active' class to matching nav item
    $('.navbar-nav.ml-auto a').each(function () {
      if (this.pathname === url) {
        $(this).closest('.nav-item').addClass('active');
      }
    });

    // Set current year to the element with id 'year'
    document.getElementById('year').textContent = new Date().getFullYear();
  });
})(jQuery);
