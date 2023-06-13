AOS.init();

const hamburger = document.querySelector(".hamburger");
const menuContainer = document.querySelector(".menu-container");
const navLinks = document.querySelectorAll(".menu li a");
const checkBox = document.querySelector("#check");

checkBox.addEventListener("change", function () {
  menuContainer.classList.toggle("show");
  hamburger.classList.toggle("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      menuContainer.classList.remove("show");
      hamburger.classList.remove("active");
      checkBox.checked = false;
    }
  });
});
