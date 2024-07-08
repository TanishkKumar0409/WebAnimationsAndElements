// preloader
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.body.classList.add("loaded");
  }, 2000);
});
// preloader
/* offcanvas navigation bar */
document.getElementById("toggleButton").addEventListener("click", function () {
  this.classList.toggle("active");
  var offcanvas = document.getElementById("offcanvasCustom");
  if (this.classList.contains("active")) {
    offcanvas.classList.add("show");
  } else {
    offcanvas.classList.remove("show");
  }
});

// Close the offcanvas if the user clicks outside of it
document.addEventListener("click", function (event) {
  var offcanvas = document.getElementById("offcanvasCustom");
  var toggleButton = document.getElementById("toggleButton");
  if (
    !offcanvas.contains(event.target) &&
    !toggleButton.contains(event.target)
  ) {
    offcanvas.classList.remove("show");
    toggleButton.classList.remove("active");
  }
});
/* offcanvas navigation bar */

/* home page ripple carousel */
const carousel = document.querySelector(".r-carousel-div");
const items = Array.from(document.querySelectorAll(".r-carousel-item"));
let autoPlayInterval;
const autoPlayDelay = 5000;

function moveToNextSlide() {
  const currentSlide = items.shift();
  items.push(currentSlide);
  updateSlides();
}

function moveToPrevSlide() {
  const lastSlide = items.pop();
  items.unshift(lastSlide);
  updateSlides();
}

function updateSlides() {
  items.forEach((item, index) => {
    item.style.zIndex = items.length - index;
    item.style.transform = "translateX(0)";
  });
  items[items.length - 1].style.transform = "translateX(100%)";
  setTimeout(() => {
    items[items.length - 1].style.transition = "none";
    items[items.length - 1].style.transform = "translateX(0)";
    setTimeout(() => {
      items[items.length - 1].style.transition = "transform 0.5s ease-in-out";
    }, 50);
  }, 500);
}

function nextSlide() {
  clearInterval(autoPlayInterval);
  items[0].style.transform = "translateX(-100%)";
  setTimeout(() => {
    moveToNextSlide();
    autoPlay();
  }, 500);
}

function prevSlide() {
  clearInterval(autoPlayInterval);
  items[items.length - 1].style.transition = "none";
  items[items.length - 1].style.transform = "translateX(-100%)";
  setTimeout(() => {
    moveToPrevSlide();
    items[0].style.transition = "transform 0.5s ease-in-out";
    items[0].style.transform = "translateX(0)";
    autoPlay();
  }, 50);
}

function autoPlay() {
  clearInterval(autoPlayInterval);
  autoPlayInterval = setInterval(nextSlide, autoPlayDelay);
}

document.addEventListener("DOMContentLoaded", () => {
  updateSlides();
  autoPlay();
});
/* home page ripple carousel */
/*moving numbers */
const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  let count = 0;
  const max = parseInt(counter.getAttribute("data-max"), 10);

  function increment() {
    if (count < max) {
      count++;
      counter.textContent = count;
      setTimeout(increment, 50);
    }
  }
  increment();
});
/*moving numbers */
// clients
document.addEventListener("DOMContentLoaded", function () {
  const carouselContent = document.getElementById("carousel-content");
  const images = Array.from(carouselContent.children);

  // Duplicate the images for a seamless loop
  images.forEach((image) => {
    const clone = image.cloneNode(true);
    carouselContent.appendChild(clone);
  });
});
// clients
