document.addEventListener("DOMContentLoaded", () => {
  const fixedButton = document.getElementById("fixed-contact-button");

  function updatebutton() {
    const atBottom = document.documentElement.scrollHeight - window.innerHeight;

    const shouldShow = window.scrollY > 100 && window.scrollY != atBottom;

    fixedButton.classList.toggle("show", shouldShow);

    console.log({ scroll: window.scrollY, bottom: atBottom });
  }

  window.addEventListener("scroll", () => {
    requestAnimationFrame(updatebutton);
  });
});
