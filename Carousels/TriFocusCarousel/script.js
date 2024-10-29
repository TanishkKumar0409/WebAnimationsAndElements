const container = document.querySelector(".image-container");
const images = Array.from(container.children).filter((child) =>
  child.classList.contains("image-card")
);
const indicators = document.querySelectorAll(".carousel-indicator");

let currentIndex = 0;
let interval = setInterval(updateCarousel, 3000);
let isDebouncing = false;

function updateCarousel() {
  images.forEach((image, index) => {
    image.classList.remove("left", "center-image", "right");
    indicators[index].classList.remove("active");
  });

  const leftIndex = (currentIndex - 1 + images.length) % images.length;
  const centerIndex = currentIndex;
  const rightIndex = (currentIndex + 1) % images.length;

  images[leftIndex].classList.add("side-image", "left");
  images[centerIndex].classList.add("center-image");
  images[rightIndex].classList.add("side-image", "right");

  indicators[centerIndex].classList.add("active");

  currentIndex = (currentIndex + 1) % images.length;
}

function debounce(callback, delay) {
  if (isDebouncing) return;
  isDebouncing = true;
  callback();
  setTimeout(() => {
    isDebouncing = false;
  }, delay);
}

indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    debounce(() => {
      clearInterval(interval);
      currentIndex = index;
      updateCarousel();
      interval = setInterval(updateCarousel, 3000);
    }, 300);
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    clearInterval(interval);
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
    interval = setInterval(updateCarousel, 3000);
  } else if (e.key === "ArrowRight") {
    clearInterval(interval);
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
    interval = setInterval(updateCarousel, 3000);
  }
});

updateCarousel();
