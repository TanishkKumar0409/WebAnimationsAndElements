const positions = document.querySelectorAll('input[name="position"]');
let currentPosition = 3;
let interval;

function updateCurrentPosition() {
  positions.forEach((position, index) => {
    if (position.checked) {
      currentPosition = index + 1;
    }
  });
}

document.getElementById("prev").addEventListener("click", () => {
  updateCurrentPosition();
  currentPosition =
    currentPosition === 1 ? positions.length : currentPosition - 1;
  positions[currentPosition - 1].checked = true;
  resetAutoplay();
});

document.getElementById("next").addEventListener("click", () => {
  updateCurrentPosition();
  currentPosition =
    currentPosition === positions.length ? 1 : currentPosition + 1;
  positions[currentPosition - 1].checked = true;
  resetAutoplay();
});

function autoplay() {
  interval = setInterval(() => {
    document.getElementById("next").click();
  }, 3000);
}

function resetAutoplay() {
  clearInterval(interval);
  autoplay();
}

autoplay();
