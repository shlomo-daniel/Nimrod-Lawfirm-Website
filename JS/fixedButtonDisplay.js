document.addEventListener("DOMContentLoaded", () => {
  const fixedButton = document.getElementById("fixed-contact-button");

  function updatebutton() {
    const atBottom = document.documentElement.scrollHeight - window.innerHeight;

    const shouldHide = window.scrollY < 100 || window.scrollY >= atBottom;

    fixedButton.classList.toggle("hidden", shouldHide);
  }

  window.addEventListener("scroll", () => {
    requestAnimationFrame(updatebutton);
  });
});
