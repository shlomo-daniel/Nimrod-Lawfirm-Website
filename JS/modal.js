const gallery = document.querySelectorAll(".proof-doc");
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");
const xButton = document.getElementById("modal-x");

// open modal
gallery.forEach((elem) => {
  elem.addEventListener("click", function () {
    const targetSrc = elem.src;
    modalImage.src = targetSrc;
    modal.showModal();
  });
});

// close modal
xButton.addEventListener("click", (e) => {
  modal.close();
});

// close modal on outside click
modal.addEventListener("click", (e) => {
  const dialogDimensions = modal.getBoundingClientRect();
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    modal.close();
  }
});
