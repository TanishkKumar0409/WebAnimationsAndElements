const video = document.querySelector(".video-banner__video");
const muteButton = document.querySelector(".mute-button");
const volumeSlider = document.querySelector(".volume-slider");
let hideControlsTimeout;

function toggleMute() {
  if (video.muted || video.volume === 0) {
    video.muted = false;
    volumeSlider.value = video.volume || 0; // Restore volume or set to 0 if undefined
    muteButton.innerHTML = '<i class="fas fa-volume-up"></i>';
    updateVolumeSlider(volumeSlider.value);
  } else {
    video.muted = true;
    volumeSlider.value = 0; // Set slider to 0 when muted
    muteButton.innerHTML = '<i class="fas fa-volume-mute"></i>';
    updateVolumeSlider(0);
  }
  resetHideControlsTimer();
}

function changeVolume(value) {
  video.volume = value;
  video.muted = value === "0";
  muteButton.innerHTML = video.muted
    ? '<i class="fas fa-volume-mute"></i>'
    : '<i class="fas fa-volume-up"></i>';
  updateVolumeSlider(value);
  resetHideControlsTimer();
}

function updateVolumeSlider(value) {
  const percentage = value * 100;
  volumeSlider.style.background = `linear-gradient(to right, #f44336 ${percentage}%, #ddd ${percentage}%)`;
}

function resetHideControlsTimer() {
  clearTimeout(hideControlsTimeout);
  document.querySelector(".controls").style.opacity = "1";
  document.querySelector(".controls").style.transform = "translateY(0)";
  hideControlsTimeout = setTimeout(() => {
    document.querySelector(".controls").style.opacity = "0";
    document.querySelector(".controls").style.transform = "translateY(10px)";
  }, 3000);
}

document.addEventListener("DOMContentLoaded", () => {
  video.muted = true;
  video.play().catch((error) => {
    console.log("Autoplay failed:", error);
  });

  document.querySelector(".controls").style.opacity = "1";
  resetHideControlsTimer();

  document.addEventListener("mousemove", resetHideControlsTimer);
});
