const gallery = document.querySelectorAll(".proof-doc");

const modalView = document.createElement("div");

gallery.forEach((elem) => {
  elem.addEventListener("click", function () {
    elem.classList.toggle("modal-toggle");
  });
});
