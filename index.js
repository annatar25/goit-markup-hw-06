const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("modal-open");
const closeModalBtn = document.getElementById("modal-close");

openModalBtn.addEventListener("click", function () {
  modal.classList.add("modal-hidden");
});

closeModalBtn.addEventListener("click", function () {
  modal.classList.remove("modal-hidden");
});

const hamburgerMenu = document.querySelector(".hamburger-menu");
const hamburgerOpen = document.getElementById("hamburger-open");
const hamburgerClose = document.getElementById("hamburger-close");

hamburgerOpen.addEventListener("click", function () {
  hamburgerMenu.classList.remove("hamburger-menu-hidden");
});

hamburgerClose.addEventListener("click", function () {
  hamburgerMenu.classList.add("hamburger-menu-hidden");
});
