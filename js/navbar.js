(function () {
  "use strict";

  function initNavbar() {
    var header = document.querySelector(".header");
    if (!header) return;

    var onScroll = function () {
      header.classList.toggle("header--scrolled", window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initNavbar);
  } else {
    initNavbar();
  }
})();
