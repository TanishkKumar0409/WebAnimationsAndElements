var cursor1 = document.querySelector(".cursor-1");
var cursor2 = document.querySelector(".cursor-2");

var posX = 0,
  posY = 0;
var mouseX = 0,
  mouseY = 0;

function updateCursor() {
  posX += (mouseX - posX) * 0.1;
  posY += (mouseY - posY) * 0.1;

  cursor2.style.left = mouseX + "px";
  cursor2.style.top = mouseY + "px";

  cursor1.style.left = posX + "px";
  cursor1.style.top = posY + "px";

  requestAnimationFrame(updateCursor);
}

document.addEventListener("mousemove", function (e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

document.body.addEventListener("mouseenter", function () {
  cursor1.style.opacity = "1";
  cursor2.style.opacity = "1";
});

document.body.addEventListener("mouseleave", function () {
  cursor1.style.opacity = "0";
  cursor2.style.opacity = "0";
});

requestAnimationFrame(updateCursor);

document.querySelectorAll(".content").forEach((content) => {
  content.addEventListener("mouseenter", function () {
    cursor1.style.transform = "translate(-50%, -50%) scale(1.5)";
    cursor1.style.backgroundColor = "bisque";
    cursor1.style.opacity = "0.5";
    cursor2.style.opacity = "0";
  });

  content.addEventListener("mouseleave", function () {
    cursor1.style.transform = "translate(-50%, -50%) scale(1)";
    cursor1.style.backgroundColor = "transparent";
    cursor1.style.opacity = "1";
    cursor2.style.opacity = "1";
  });
});
