document.addEventListener("DOMContentLoaded", () => {
  const fixedButton = document.getElementById("fixed-contact-button");

  function updatebutton() {
    const atBottom = document.documentElement.scrollHeight - window.innerHeight;
    const shouldHide = window.scrollY < 100 || window.scrollY >= atBottom;
    // if (shouldHide) {
    //   fixedButton.style.display = "none";
    // } else {
    //   fixedButton.style.display = "block";
    // }
    // console.log(window.scrollY);

    fixedButton.classList.toggle("hidden", shouldHide);
  }

  window.addEventListener("scroll", () => {
    requestAnimationFrame(updatebutton);
  });
});
