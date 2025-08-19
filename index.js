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
document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const hamburgerIcon = document.querySelector(".hamburger");
  const hamburgerClose = document.querySelector(".hamburger-close");

  // Menü başlangıçta gizli
  hamburgerMenu.style.display = "none";

  // Açma
  hamburgerIcon.addEventListener("click", function () {
    hamburgerMenu.style.display = "block";
  });

  // Kapatma
  hamburgerClose.addEventListener("click", function () {
    hamburgerMenu.style.display = "none";
  });

  // ESC ile kapatma
  window.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      hamburgerMenu.style.display = "none";
    }
  });

  // Menü dışında tıklayınca kapatma
  hamburgerMenu.addEventListener("click", function (e) {
    if (e.target === hamburgerMenu) {
      hamburgerMenu.style.display = "none";
    }
  });
});