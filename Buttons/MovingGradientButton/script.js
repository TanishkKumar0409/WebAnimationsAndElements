let btn = document.querySelector(".button");
btn.addEventListener("mousemove", (e) => {
  let rect = e.target.getBoundingClientRect();
  let x = e.clientX * 2 - rect.left;
  btn.style.setProperty("--x", x + "deg");
});
