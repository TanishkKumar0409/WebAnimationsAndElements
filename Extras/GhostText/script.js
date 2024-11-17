let text = "welcome to";
let text2 = "Ghost world";
let h2 = document.getElementById("ghostText");
let h2Alt = document.getElementById("ghostText2");

text.split("").forEach((char, index) => {
  let span = document.createElement("span");
  span.textContent = char === " " ? "\u00A0\u00A0" : char;
  span.style.transitionDelay = `${(index % text.length) * 0.1}s`;
  h2.appendChild(span);
});

text2.split("").forEach((char, index) => {
  let span = document.createElement("span");
  span.textContent = char === " " ? "\u00A0\u00A0" : char;
  span.style.transitionDelay = `${(index % text2.length) * 0.1}s`;
  h2Alt.appendChild(span);
});

function enter() {
  h2.classList.add("active");
  h2Alt.classList.remove("active");
}

function leave() {
  h2.classList.remove("active");
  h2Alt.classList.add("active");
}
