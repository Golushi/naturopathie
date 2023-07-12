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

// Lire d'avantage
function readMore() {
  let dots = document.getElementById("dots");
  let moreText = document.getElementById("more");
  let btnText = document.getElementById("readMoreBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Lire plus";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Lire moins";
    moreText.style.display = "inline";
  }
}
function readMore1() {
  let dots = document.getElementById("dots1");
  let moreText = document.getElementById("more1");
  let btnText = document.getElementById("readMoreBtn1");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Lire plus";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Lire moins";
    moreText.style.display = "inline";
  }
}
function readMore2() {
  let dots = document.getElementById("dots2");
  let moreText = document.getElementById("more2");
  let btnText = document.getElementById("readMoreBtn2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Lire plus";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Lire moins";
    moreText.style.display = "inline";
  }
}
function readMore3() {
  let dots = document.getElementById("dots3");
  let moreText = document.getElementById("more3");
  let btnText = document.getElementById("readMoreBtn3");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Lire plus";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Lire moins";
    moreText.style.display = "inline";
  }
}
