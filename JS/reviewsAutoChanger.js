document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".review-item");
  //   const rightButton = document.getElementById("slide-right");
  //   const leftButton = document.getElementById("slide-left");
  // const slideDots = document.querySelectorAll(".slide-dot");

  const firstSlide = slides.length - 1;
  const lastSlide = 0;
  let currentIndex = firstSlide;

  const intervalID = autoSlide();

  function autoSlide() {
    const intervalID = setInterval(() => {
      slides.forEach((slide) => slide.classList.remove("active-review"));
      // slideDots.forEach((dot) => dot.classList.remove("active-dot"));

      if (currentIndex >= slides.length - 1) {
        currentIndex = lastSlide;
        slides[currentIndex].classList.add("active-review");
        // slideDots[currentIndex].classList.add("active-dot");
        return;
      }

      currentIndex++;
      slides[currentIndex].classList.add("active-review");
      // slideDots[currentIndex].classList.add("active-dot");
    }, 3000);
    return intervalID;
  }

  //   function stopAutoSlide() {
  //     clearInterval(intervalID);
  //   }
});
