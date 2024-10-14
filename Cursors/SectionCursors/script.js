var cursors = document.querySelectorAll(".cursor-1");
var sections = document.querySelectorAll(".custom-cursor-section");
let cursorPositions = Array.from(cursors).map(() => ({
  x: 0,
  y: 0,
}));
let targetPositions = Array.from(cursors).map(() => ({
  x: 0,
  y: 0,
}));
let delay = 0.1;
let activeCursor = 0;
function animateCursor() {
  cursorPositions.forEach((pos, index) => {
    pos.x += (targetPositions[index].x - pos.x) * delay;
    pos.y += (targetPositions[index].y - pos.y) * delay;
    const sectionRect = sections[index].getBoundingClientRect();
    const cursorRect = cursors[index].getBoundingClientRect();
    pos.x = Math.min(
      Math.max(pos.x, sectionRect.left),
      sectionRect.right - cursorRect.width
    );
    pos.y = Math.min(
      Math.max(pos.y, sectionRect.top),
      sectionRect.bottom - cursorRect.height
    );
    cursors[index].style.left = `${pos.x}px`;
    cursors[index].style.top = `${pos.y}px`;
  });
  requestAnimationFrame(animateCursor);
}
function updateCursorPosition(e) {
  sections.forEach((section, index) => {
    var rect = section.getBoundingClientRect();
    if (
      e.clientX >= rect.left &&
      e.clientX <= rect.right &&
      e.clientY >= rect.top &&
      e.clientY <= rect.bottom
    ) {
      activeCursor = index;
      targetPositions[index].x = e.clientX;
      targetPositions[index].y = e.clientY;
    }
  });
}
document.addEventListener("mousemove", function (e) {
  updateCursorPosition(e);
});
function showActiveCursor() {
  cursors[activeCursor].style.display = "block";
}
function hideInactiveCursors() {
  cursors.forEach((cursor, index) => {
    if (index !== activeCursor) {
      cursor.style.display = "none";
    }
  });
}
function init() {
  showActiveCursor();
  animateCursor();
}
init();
