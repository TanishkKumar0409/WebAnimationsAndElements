const carousel = document.querySelector(".carousel");
const items = Array.from(document.querySelectorAll(".carousel-item"));
let autoPlayInterval;

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
    item.style.transform = "translateY(0)";
  });
  items[items.length - 1].style.transform = "translateY(-100%)";
  setTimeout(() => {
    items[items.length - 1].style.transition = "none";
    items[items.length - 1].style.transform = "translateY(0)";
    setTimeout(() => {
      items[items.length - 1].style.transition = "transform 0.5s ease-in-out";
    }, 50);
  }, 500);
}

function nextSlide() {
  clearInterval(autoPlayInterval);
  items[0].style.transform = "translateY(100%)";
  setTimeout(() => {
    moveToNextSlide();
    autoPlay();
  }, 500);
}

function prevSlide() {
  clearInterval(autoPlayInterval);
  items[items.length - 1].style.transition = "none";
  items[items.length - 1].style.transform = "translateY(100%)";
  setTimeout(() => {
    moveToPrevSlide();
    items[0].style.transition = "transform 0.5s ease-in-out";
    items[0].style.transform = "translateY(0)";
    autoPlay();
  }, 50);
}

function autoPlay() {
  autoPlayInterval = setInterval(nextSlide, 5000);
}

document.addEventListener("DOMContentLoaded", () => {
  updateSlides();
  autoPlay();
});
