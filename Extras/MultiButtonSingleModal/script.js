var modal = document.getElementById("videoModal");
var buttons = document.querySelectorAll(".modalBtn");
var videoFrame = document.getElementById("videoFrame");
var videoSrc = "https://www.youtube.com/embed/HgQ14BpEfCs?autoplay=1&mute=1";

buttons.forEach(function (btn) {
  btn.onclick = function () {
    videoFrame.src = videoSrc;
    modal.style.display = "flex";
  };
});

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    videoFrame.src = "";
  }
};
