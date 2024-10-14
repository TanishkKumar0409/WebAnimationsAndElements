const leftPerspectives = [
  { x: -10, z: -4 },
  { x: -20, z: -8 },
  { x: -30, z: -12 },
  { x: -40, z: -16 },
  { x: -50, z: -20 },
  { x: 0, z: -10 },
];

const rightPerspectives = [
  { x: 10, z: -4 },
  { x: 20, z: -8 },
  { x: 30, z: -12 },
  { x: 40, z: -16 },
  { x: 50, z: -20 },
  { x: 0, z: -10 },
];

const leftCards = document.querySelectorAll(".left .item");
const rightCards = document.querySelectorAll(".right .item");

const translateImage = (target, p) => {
  target.style.transform = `translate3d(${p.x}rem,0,${p.z}rem)`;
};

const animateCards = (cards, perspectives) => {
  cards.forEach((c) => {
    const count = parseInt(c.dataset.counter);
    translateImage(c, perspectives[count - 1]);
    c.dataset.counter = (count === 6 ? 1 : count + 1).toString();
  });
};

let intervalId;

const startLoop = () => {
  intervalId = setInterval(() => {
    animateCards(leftCards, leftPerspectives);
    animateCards(rightCards, rightPerspectives);
  }, 2000);
};

const resetLoop = () => {
  clearInterval(intervalId);
  startLoop();
};

const handleCardClick = (event) => {
  const card = event.currentTarget;
  const isLeft = card.closest(".left");
  if (isLeft) {
    animateCards(leftCards, leftPerspectives);
  } else {
    animateCards(rightCards, rightPerspectives);
  }
  resetLoop();
};

// Add click event listeners
leftCards.forEach((card) => {
  card.addEventListener("click", handleCardClick);
});

rightCards.forEach((card) => {
  card.addEventListener("click", handleCardClick);
});

// Start the animation loop
startLoop();
