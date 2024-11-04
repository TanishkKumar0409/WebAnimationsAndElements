const amounts = [
  { amount: 800, color: "red" },
  { amount: 70, color: "lime" },
  { amount: 50, color: "magenta" },
  { amount: 50, color: "dodgerblue" },
];

let totalAmount = 0;
let percentages = [];
let angle = 0;

const calculateTotal = () => {
  totalAmount = amounts.reduce((acc, item) => acc + item.amount, 0);
  document.getElementById("totalAmount").innerText = totalAmount;
};

const calculatePercentage = (total) => {
  percentages = amounts.map((item) => (item.amount / total) * 100);
};

const getGradient = () => {
  let gradient = `conic-gradient(from ${angle}deg`;
  let cumulativePercentage = 0;

  amounts.forEach((item, index) => {
    const percentage = percentages[index] || 0;
    const color = item.color || "transparent";

    gradient += `, ${color} ${cumulativePercentage}% ${
      cumulativePercentage + percentage
    }%`;
    cumulativePercentage += percentage;
  });

  gradient += ")";
  return gradient;
};

const updatePieChart = () => {
  calculateTotal();
  if (totalAmount > 0) {
    calculatePercentage(totalAmount);
  } else {
    percentages = [];
  }

  document.getElementById("pieChart").style.background = getGradient();
};

setInterval(() => {
  angle = (angle + 1) % 360;
  document.getElementById("pieChart").style.background = getGradient();
}, 30);

updatePieChart();
