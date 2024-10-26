const imgDiv = document.querySelectorAll(".imgDiv");
function addAction(index) {
  for (let i = 0; i < imgDiv.length; i++) {
    imgDiv[i].classList.remove("active");
  }
  imgDiv[index].classList.add("active");
}
