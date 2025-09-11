const navContainer = document.querySelector(".nav-container");
const navList = document.querySelectorAll(".nav-list");
const navIcon = document.getElementById("menu-icon");

navIcon.addEventListener("click", (e) => {
  e.preventDefault();
  navContainer.classList.toggle("mobile-mode");
  navIcon.classList.toggle("active");
  console.log(navContainer);
});
