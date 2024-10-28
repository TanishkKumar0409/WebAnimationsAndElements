const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");
const mode = document.getElementById("mode");
const mode2 = document.getElementById("mode2");
const body = document.getElementById("body");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

function toggleTheme() {
  if (body.classList.contains("dark")) {
    body.classList.replace("dark", "light");
    mode.value = mode2.value = "light";
  } else {
    body.classList.replace("light", "dark");
    mode.value = mode2.value = "dark";
  }
  console.log("Theme mode:", mode.value);
}

mode.addEventListener("click", toggleTheme);
mode2.addEventListener("click", toggleTheme);
