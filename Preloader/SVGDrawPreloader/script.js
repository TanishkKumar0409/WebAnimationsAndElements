window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    setTimeout(function () {
      preloader.style.display = "none";
      document.querySelector(".container").style.display = "flex";
    }, 5000);
  });