document.addEventListener("DOMContentLoaded", function () {
    const carousels = document.querySelectorAll(".apparent-image-grid");
    const navLabels = document.querySelectorAll(".navigation-label");
    function showSlide(index) {
      carousels.forEach((carousel) => carousel.classList.remove("run"));
      navLabels.forEach((navLabel) => navLabel.classList.remove("run"));
      carousels[index].classList.add("run");
      navLabels[index].classList.add("run");
    }
    navLabels.forEach((label, index) => {
      label.addEventListener("click", () => {
        showSlide(index);
      });
    });
    let currentSlide = 0;
    const slideInterval = 1000;
    function nextSlide() {
      currentSlide = (currentSlide + 1) % carousels.length;
      showSlide(currentSlide);
    }
    setInterval(nextSlide, slideInterval);
  });
  