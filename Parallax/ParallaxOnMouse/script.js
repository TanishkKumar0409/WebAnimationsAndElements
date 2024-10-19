document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".background-images img");
  const container = document.querySelector(".container");

  container.addEventListener("mousemove", (e) => {
    const rect = container.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const offsetX = (centerX - e.clientX) / 15; // Inverted direction
    const offsetY = (centerY - e.clientY) / 15;

    images.forEach((img, index) => {
      const depth = (index + 1) / 2;
      const moveX = offsetX * depth;
      const moveY = offsetY * depth;
      img.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
  });
});
