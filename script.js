const carousel = document.querySelector(".carousel");
const indicators = document.getElementsByClassName("indicator");
let currentIndex = 1;
let currentIndicator = 1;
let intervalId;

const timer = () => {
  intervalId = setInterval(() => {
    for (let i = 0; i < indicators.length; i++) {
      indicators[i].classList.remove("active");
    }

    if (currentIndicator < indicators.length) {
      indicators[currentIndicator].classList.add("active");
      currentIndicator++;
    } else {
      currentIndicator = 0;
      indicators[currentIndicator].classList.add("active");
      currentIndicator = 1;
    }

    carousel.style.transform = `rotateY(${currentIndex * 90}deg)`;
    currentIndex++;
  }, 3000);
};

timer();

function clickFunction(i) {
  clearInterval(intervalId);
  for (let j = 0; j < indicators.length; j++) {
    indicators[j].classList.remove("active");
  }
  indicators[i - 1].classList.add("active");
  carousel.style.transform = `rotateY(${(i - 1) * 90}deg)`;
  currentIndex = i;
  currentIndicator = i;
  timer();
}
