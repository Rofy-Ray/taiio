/**
 * WEBSITE: https://themefisher.com
 * TWITTER: https://twitter.com/themefisher
 * FACEBOOK: https://www.facebook.com/themefisher
 * GITHUB: https://github.com/themefisher/
 */

!function(o){"use strict";AOS.init({once:!0}),o(window).on("load",function(){o(".progress-bar").each(function(){var e=o(this).data("percent");o(this).css({transition:"width 3s"}),o(this).appear(function(){console.log("hello"),o(this).css("width",e+"%"),o(this).find(".count").countTo({from:0,to:e,speed:3e3,refreshInterval:50})})})}),o(".owl-carousel").owlCarousel({items:1,loop:!0,autoplay:!0,dots:!1,autoplayTimeout:8e3});var e=window.Shuffle,t=window.jQuery,n=new e(document.querySelector(".shuffle-wrapper"),{itemSelector:".shuffle-item",buffer:1});t("input[name='shuffle-filter']").on("change",function(e){e=e.currentTarget;e.checked&&n.filter(e.value)}),o(".portfolio-gallery").each(function(){o(this).find(".popup-gallery").magnificPopup({type:"image",gallery:{enabled:!0}})})}(jQuery);