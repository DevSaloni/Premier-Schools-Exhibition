(function () {
  "use strict";

  function initLogosMarquee() {
    var marquees = document.querySelectorAll(".schools-logos__marquee");
    marquees.forEach(function (marquee) {
      marquee.addEventListener("mouseenter", function () {
        marquee.setAttribute("data-paused", "true");
      });
      marquee.addEventListener("mouseleave", function () {
        marquee.removeAttribute("data-paused");
      });
      marquee.addEventListener("focusin", function () {
        marquee.setAttribute("data-paused", "true");
      });
      marquee.addEventListener("focusout", function () {
        marquee.removeAttribute("data-paused");
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initLogosMarquee);
  } else {
    initLogosMarquee();
  }
})();
