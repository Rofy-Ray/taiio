/**
 * WEBSITE: https://themefisher.com
 * TWITTER: https://twitter.com/themefisher
 * FACEBOOK: https://www.facebook.com/themefisher
 * GITHUB: https://github.com/themefisher/
 */

!function(e){"use strict";e(document).ready(function(){var t=window.location.pathname;e(".nav-item").removeClass("active"),e(".navbar-nav.ml-auto a").each(function(){this.pathname===t&&e(this).closest(".nav-item").addClass("active")}),document.getElementById("year").textContent=(new Date).getFullYear()})}(jQuery);