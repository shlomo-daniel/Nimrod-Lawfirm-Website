const navContainer = document.querySelector(".nav-container");
const navList = document.querySelectorAll(".nav-list");
const navLogo = document.getElementById("nav-logo");

navLogo.addEventListener("click", (e) => {
  e.preventDefault();
  navContainer.classList.toggle("mobile-mode");
  console.log(navContainer);
});
