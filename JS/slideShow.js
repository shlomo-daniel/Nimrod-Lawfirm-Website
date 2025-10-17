document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".pain-card");
  const rightButton = document.getElementById("slide-right");
  const leftButton = document.getElementById("slide-left");
  // const slideDots = document.querySelectorAll(".slide-dot");

  const firstSlide = slides.length - 1;
  const lastSlide = 0;
  let currentIndex = firstSlide;

  const intervalID = autoSlide();

  function autoSlide() {
    const intervalID = setInterval(() => {
      slides.forEach((slide) => slide.classList.remove("active-pain-card"));
      // slideDots.forEach((dot) => dot.classList.remove("active-dot"));

      if (currentIndex >= slides.length - 1) {
        currentIndex = lastSlide;
        slides[currentIndex].classList.add("active-pain-card");
        // slideDots[currentIndex].classList.add("active-dot");
        return;
      }

      currentIndex++;
      slides[currentIndex].classList.add("active-pain-card");
      // slideDots[currentIndex].classList.add("active-dot");
    }, 6000);
    return intervalID;
  }

  function stopAutoSlide() {
    clearInterval(intervalID);
  }

  // arrows
  rightButton.addEventListener("click", () => {
    stopAutoSlide();
    slides.forEach((slide) => slide.classList.remove("active-pain-card"));
    // slideDots.forEach((dot) => dot.classList.remove("active-dot"));

    if (currentIndex >= slides.length - 1) {
      currentIndex = lastSlide;
      slides[currentIndex].classList.add("active-pain-card");
      // slideDots[currentIndex].classList.add("active-dot");
      return;
    }

    currentIndex++;
    slides[currentIndex].classList.add("active-pain-card");
    // slideDots[currentIndex].classList.add("active-dot");
  });

  leftButton.addEventListener("click", () => {
    stopAutoSlide();
    slides.forEach((slide) => {
      slide.classList.remove("active-pain-card");
    });
    // slideDots.forEach((dot) => {
    // dot.classList.remove("active-dot");
    // });

    if (currentIndex <= 0) {
      currentIndex = firstSlide;
      slides[currentIndex].classList.add("active-pain-card");
      // slideDots[currentIndex].classList.add("active-dot");
      return;
    }

    currentIndex--;
    slides[currentIndex].classList.add("active-pain-card");
    // slideDots[currentIndex].classList.add("active-dot");
  });
});
