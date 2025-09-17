const navContainer = document.querySelector(".nav-container");
const navUl = document.querySelectorAll(".nav-list");
const navIcon = document.getElementById("menu-icon");
navIcon.addEventListener("click", (e) => {
  e.preventDefault();
  navIcon.classList.toggle("active");
  navUl.forEach((ul) => {
    ul.classList.toggle("open-menu");
  });
  navContainer.classList.toggle("mobile-mode");
  console.log(navContainer);
});
