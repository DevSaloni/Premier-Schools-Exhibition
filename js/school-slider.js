(function () {
  "use strict";

  function initSchoolSlider(announce) {
    var viewport = document.querySelector(".choose-school__viewport");
    var track = document.querySelector(".choose-school__track");
    var cards = Array.from(document.querySelectorAll(".choose-school__card"));
    var dots = Array.from(document.querySelectorAll(".choose-school__dot"));
    if (!viewport || !track || !cards.length || !window.PSEHeroSlider) return;

    var instance = null;

    function isMobile() {
      return window.innerWidth <= 1024;
    }

    function setup() {
      if (isMobile() && !instance) {
        instance = window.PSEHeroSlider.createSlider({
          viewport: viewport,
          track: track,
          slides: cards,
          dots: dots,
          autoplay: false,
          loop: true,
          getSlideWidth: function () { return cards[0].offsetWidth + 16; },
          getVisibleCount: function () { return 1; },
          dotActiveClass: "choose-school__dot--active",
          announce: announce
        });
      } else if (!isMobile() && instance) {
        track.style.transform = "none";
        instance = null;
      }
    }

    setup();
    window.addEventListener("resize", setup);
  }

  window.PSESchoolSlider = { init: initSchoolSlider };
})();
