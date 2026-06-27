(function () {
  "use strict";

  function initExhibitionSlider(announce) {
    var cards = Array.from(document.querySelectorAll(".exhibition__card"));
    if (!cards.length || !window.PSEHeroSlider) return;

    window.PSEHeroSlider.createSlider({
      viewport: document.querySelector(".exhibition__viewport"),
      track: document.querySelector(".exhibition__track"),
      slides: cards,
      dots: [],
      prevBtn: document.querySelector(".exhibition__nav-btn--prev"),
      nextBtn: document.querySelector(".exhibition__nav-btn--next"),
      interval: 7000,
      getSlideWidth: function () { return cards[0].offsetWidth + 16; },
      getVisibleCount: function () {
        if (window.innerWidth <= 480) return 1;
        if (window.innerWidth <= 768) return 1;
        if (window.innerWidth <= 1024) return 2;
        if (window.innerWidth <= 1440) return 2;
        return 3;
      },
      announce: announce
    });
  }

  window.PSEExhibitionSlider = { init: initExhibitionSlider };
})();
