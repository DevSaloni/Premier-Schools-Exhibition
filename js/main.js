(function () {
  "use strict";

  var liveRegion = document.getElementById("live-region");

  function announce(message) {
    if (liveRegion) liveRegion.textContent = message;
  }

  function initForm() {
    var form = document.querySelector(".hero__form");
    if (!form) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.querySelector("#parent-name");
      var phone = form.querySelector("#phone");
      var valid = name.value.trim() && /^[0-9+\s-]{10,15}$/.test(phone.value.trim());
      announce(
        valid
          ? "Form submitted successfully. Thank you for your enquiry."
          : "Please fill in all required fields correctly."
      );
      if (valid) form.reset();
    });
  }

  function init() {
    if (window.PSEHeroSlider) window.PSEHeroSlider.init(announce);
    if (window.PSESchoolSlider) window.PSESchoolSlider.init(announce);
    if (window.PSEExhibitionSlider) window.PSEExhibitionSlider.init(announce);
    initForm();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
