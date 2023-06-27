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

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    // Get the target element's position
    const targetPosition = document.querySelector(
      this.getAttribute("href")
    ).offsetTop;

    // Define a pixel value to offset from the top of the document.
    const offset = 80; // Change this value to suit your needs

    // Scroll to the target position minus the offset
    window.scrollTo({
      top: targetPosition - offset,
      behavior: "smooth",
    });
  });
});
