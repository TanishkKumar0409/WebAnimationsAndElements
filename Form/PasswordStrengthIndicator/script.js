const passwordInput = document.getElementById("password");
const passwordStrengths = document.querySelectorAll(".password-strength");
const text = document.getElementById("text");

function evaluateStrength(password) {
  let score = 0;

  if (password.length >= 8) score++;
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score++;
  if (/\d/.test(password)) score++;
  if (/[@$!%*?&#]/.test(password)) score++;

  return score;
}

passwordInput.addEventListener("input", function (e) {
  const password = e.target.value;
  const strengthScore = evaluateStrength(password);

  let gradientColor;
  let strengthText;

  switch (strengthScore) {
    case 0:
    case 1:
      gradientColor = "#ff2c1c";
      strengthText = "Weak";
      break;
    case 2:
      gradientColor = "#ff9800";
      strengthText = "Medium";
      break;
    case 3:
      gradientColor = "#12ff12";
      strengthText = "Strong";
      break;
    case 4:
      gradientColor = "#12ff12";
      strengthText = "Very Strong";
      break;
  }

  const degree = (strengthScore / 4) * 360;
  passwordStrengths.forEach((strengthBar) => {
    strengthBar.style.background = `conic-gradient(${gradientColor} ${degree}deg, #111 ${degree}deg)`;
    text.style.color = gradientColor;
  });

  text.textContent = strengthText;
});
