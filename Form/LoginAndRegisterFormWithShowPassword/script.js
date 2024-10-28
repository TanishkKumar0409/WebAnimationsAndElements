function toggleForms() {
    var wrapper = document.getElementById("wrapper");
    var loginForm = document.getElementById("login-form");
    var registerForm = document.getElementById("register-form");
  
    var loginHeight = loginForm.scrollHeight + 30;
    var registerHeight = registerForm.scrollHeight + 30;
  
    if (loginForm.classList.contains("active")) {
      wrapper.style.height = `${loginHeight}px`;
      loginForm.classList.add("fade-out");
      setTimeout(function () {
        loginForm.classList.remove("active", "fade-out");
        registerForm.classList.add("active");
        wrapper.style.height = `${registerHeight}px`;
      }, 500);
    } else {
      wrapper.style.height = `${registerHeight}px`;
      registerForm.classList.add("fade-out");
      setTimeout(function () {
        registerForm.classList.remove("active", "fade-out");
        loginForm.classList.add("active");
        wrapper.style.height = `${loginHeight}px`;
      }, 500);
    }
  }
  
  document.getElementById("wrapper").style.height = `${
    document.getElementById("login-form").scrollHeight + 30
  }px`;
  
  function focusInput(inputId) {
    document.getElementById(inputId).focus();
  }
  
  function togglePasswordVisibility(spanId, password) {
    const span = document.getElementById(spanId);
    if (span.textContent === '••••••••') {
      span.textContent = password;
    } else {
      span.textContent = '••••••••';
    }
  } 
  function togglePassword() {
          const checkboxes = document.querySelectorAll(".show-password");
          checkboxes.forEach((checkbox) => {
            const formType = checkbox.dataset.form;
  
            const passwordInputs = document.querySelectorAll(
              `#${formType}-password, #${formType}-confirm-password`
            );
  
            passwordInputs.forEach((input) => {
              input.type = checkbox.checked ? "text" : "password";
            });
          });
        }
  
        document.querySelectorAll(".show-password").forEach((checkbox) => {
          checkbox.addEventListener("change", togglePassword);
        });