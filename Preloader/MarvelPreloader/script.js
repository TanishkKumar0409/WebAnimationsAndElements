document.addEventListener("DOMContentLoaded", () => {
  const countdownElement = document.getElementById("countdown");
  const preloader = document.getElementById("preloader");
  const content = document.getElementById("content");
  let countdown = 5;

  const updateCountdown = () => {
    countdownElement.textContent = countdown;
    if (countdown === 0) {
      preloader.classList.add("hidden");
      content.classList.add("visible");
      document.body.style.overflow = "auto"; // Re-enable scroll
    } else {
      countdown--;
      setTimeout(updateCountdown, 1000);
    }
  };

  updateCountdown();
});
