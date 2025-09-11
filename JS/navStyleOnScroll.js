const nav = document.getElementById("navbar");
let isNavScroll = false;

function updateNavBg() {
  nav.classList.toggle("nav-scrolled", isNavScroll);
}

// event listener
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    isNavScroll = true;
    requestAnimationFrame(updateNavBg);
  } else {
    isNavScroll = false;
    requestAnimationFrame(updateNavBg);
  }
});
