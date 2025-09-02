const mobileHeroButton = document.querySelector("#hero-cta-button-mobile");
let isScroll = false;

function updatebutton() {
  mobileHeroButton.classList.toggle("hidden", isScroll);
}

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    isScroll = true;
    requestAnimationFrame(updatebutton);
  } else {
    isScroll = false;
    requestAnimationFrame(updatebutton);
  }
});
