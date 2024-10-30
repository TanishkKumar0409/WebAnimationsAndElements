let angle = 0;
setInterval(() => {
  angle = (angle + 1) % 360;
  document.documentElement.style.setProperty("--angle", `${angle}deg`);
}, 10);
