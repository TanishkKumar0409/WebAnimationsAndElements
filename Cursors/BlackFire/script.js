const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");
const targetElements = document.querySelectorAll("img");
const pointer = document.querySelectorAll("a , h3");

circles.forEach((circle) => {
  circle.x = 0;
  circle.y = 0;
});

window.addEventListener("mousemove", (e) => {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

targetElements.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    circles.forEach((circle) => {
      circle.style.backgroundColor = "rgb(255, 255, 255)";
    });
  });

  element.addEventListener("mouseleave", () => {
    circles.forEach((circle) => {
      circle.style.backgroundColor = "rgb(10, 10, 10)";
    });
  });
});
pointer.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    circles.forEach((circle) => {
      circle.style.backgroundColor = "rgb(255, 255, 255,0.1)";
    });
  });

  element.addEventListener("mouseleave", () => {
    circles.forEach((circle) => {
      circle.style.backgroundColor = "rgb(10, 10, 10)";
    });
  });
});

function animateCircles() {
  let x = coords.x;
  let y = coords.y + window.scrollY;
  circles.forEach((circle, index) => {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    circle.style.transform = `scale(${
      (circles.length - index) / circles.length
    })`;
    circle.x = x;
    circle.y = y;
    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
  requestAnimationFrame(animateCircles);
}
animateCircles();
