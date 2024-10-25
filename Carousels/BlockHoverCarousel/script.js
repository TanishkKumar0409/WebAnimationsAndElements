const box = document.querySelectorAll(".box");
function cb(index) {
  for (let i = 0; i < box.length; i++) {
    box[i].classList.remove("active");
  }
  box[index].classList.add("active");
}
