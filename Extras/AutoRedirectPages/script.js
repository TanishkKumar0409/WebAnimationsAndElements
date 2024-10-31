function redirect() {
  let countdownElement = document.getElementById("countdown");
  let countdown = 5;
  countdownElement.textContent = countdown;

  let interval = setInterval(function () {
    countdown--;
    countdownElement.textContent = countdown;
    if (countdown <= 0) {
      clearInterval(interval);
      window.location.href = "scroller.html";
    }
  }, 1000);
}
