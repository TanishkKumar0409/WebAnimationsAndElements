document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector(".wrapper");

  for (let j = 0; j < 4; j++) {
    const loader = document.createElement("div");
    loader.classList.add("loader");
    loader.style.setProperty("--j", j);

    for (let i = 1; i <= 20; i++) {
      const span = document.createElement("span");
      span.style.setProperty("--i", i);
      loader.appendChild(span);
    }

    let state = 0;

    const toggleMultiClass = () => {
      loader.classList.remove("origin");
      loader
        .querySelectorAll("span")
        .forEach((span) => span.classList.remove("multi"));

      if (state === 0) {
      } else if (state === 1) {
        loader.classList.add("origin");
      } else if (state === 2) {
        loader
          .querySelectorAll("span")
          .forEach((span) => span.classList.add("multi"));
      }

      state = (state + 1) % 3;
    };

    setInterval(toggleMultiClass, 3000);

    wrapper.appendChild(loader);

    let angle = 0;
    setInterval(() => {
      wrapper.style.filter = `hue-rotate(${angle}deg)`;
      angle++;
    }, 10);
  }
});
