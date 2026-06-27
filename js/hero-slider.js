(function () {
  "use strict";

  function createSlider(options) {
    var viewport = options.viewport;
    var track = options.track;
    var slides = options.slides;
    var dots = options.dots || [];
    var prevBtn = options.prevBtn || null;
    var nextBtn = options.nextBtn || null;
    var autoplay = options.autoplay !== false;
    var interval = options.interval || 5000;
    var loop = options.loop !== false;
    var getSlideWidth = options.getSlideWidth;
    var currentIndex = 0;
    var totalSlides = slides.length;
    var timer = null;
    var isPaused = false;
    var touchStartX = 0;
    var announce = options.announce || function () {};

    function getVisibleCount() {
      return options.getVisibleCount ? options.getVisibleCount() : 1;
    }

    function getMaxIndex() {
      return Math.max(0, totalSlides - getVisibleCount());
    }

    function goTo(index, doAnnounce) {
      var maxIndex = getMaxIndex();
      if (loop) {
        if (index < 0) index = maxIndex;
        if (index > maxIndex) index = 0;
      } else {
        index = Math.max(0, Math.min(index, maxIndex));
      }
      currentIndex = index;

      if (getSlideWidth) {
        track.style.transform = "translateX(-" + getSlideWidth() * index + "px)";
      } else {
        slides.forEach(function (slide, i) {
          var active = i === index;
          slide.classList.toggle(options.activeClass || "hero__slide--active", active);
          slide.hidden = !active;
        });
      }

      dots.forEach(function (dot, i) {
        var active = i === index;
        dot.classList.toggle(options.dotActiveClass || "hero__dot--active", active);
        dot.setAttribute("aria-selected", active ? "true" : "false");
      });

      if (doAnnounce !== false) {
        announce("Slide " + (index + 1) + " of " + (maxIndex + 1));
      }
    }

    function next() { goTo(currentIndex + 1); }
    function prev() { goTo(currentIndex - 1); }
    function startAutoplay() {
      if (!autoplay || isPaused) return;
      stopAutoplay();
      timer = setInterval(next, interval);
    }
    function stopAutoplay() {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    }

    if (prevBtn) prevBtn.addEventListener("click", function () { prev(); startAutoplay(); });
    if (nextBtn) nextBtn.addEventListener("click", function () { next(); startAutoplay(); });
    dots.forEach(function (dot, i) {
      dot.addEventListener("click", function () { goTo(i); startAutoplay(); });
    });

    if (viewport) {
      viewport.addEventListener("touchstart", function (e) {
        touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });
      viewport.addEventListener("touchend", function (e) {
        var diff = touchStartX - e.changedTouches[0].screenX;
        if (Math.abs(diff) > 50) {
          if (diff > 0) next();
          else prev();
        }
      }, { passive: true });
      viewport.addEventListener("mouseenter", function () { isPaused = true; stopAutoplay(); });
      viewport.addEventListener("mouseleave", function () { isPaused = false; startAutoplay(); });
      viewport.addEventListener("keydown", function (e) {
        if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
        if (e.key === "ArrowRight") { e.preventDefault(); next(); }
      });
    }

    window.addEventListener("resize", function () { goTo(currentIndex, false); });
    goTo(0, false);
    startAutoplay();

    return {
      next: next,
      prev: prev,
      pause: function () { isPaused = true; stopAutoplay(); },
      resume: function () { isPaused = false; startAutoplay(); }
    };
  }

  function initHeroSlider(announce) {
    var heroSection = document.querySelector(".hero");
    var slides = Array.from(document.querySelectorAll(".hero__slide"));
    var pauseBtn = document.querySelector(".hero__control--pause");
    if (!slides.length) return;

    var slider = createSlider({
      viewport: document.querySelector(".hero__slider-viewport"),
      track: document.querySelector("[data-hero-track]"),
      slides: slides,
      dots: Array.from(document.querySelectorAll(".hero__dot")),
      prevBtn: document.querySelector(".hero__control--prev"),
      nextBtn: document.querySelector(".hero__control--next"),
      interval: 6000,
      activeClass: "hero__slide--active",
      dotActiveClass: "hero__dot--active",
      announce: announce
    });

    if (pauseBtn && heroSection) {
      pauseBtn.addEventListener("click", function () {
        var paused = pauseBtn.classList.toggle("hero__control--paused");
        pauseBtn.setAttribute("aria-pressed", paused ? "true" : "false");
        pauseBtn.setAttribute("aria-label", paused ? "Play slideshow" : "Pause slideshow");
        if (paused) {
          slider.pause();
          heroSection.classList.add("hero--paused");
        } else {
          slider.resume();
          heroSection.classList.remove("hero--paused");
        }
      });
    }
  }

  window.PSEHeroSlider = { init: initHeroSlider, createSlider: createSlider };
})();
