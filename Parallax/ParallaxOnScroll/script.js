let text = document.getElementById("text");
let treeleft = document.getElementById("treeleft");
let treeright = document.getElementById("treeright");
let gateleft = document.getElementById("gateleft");
let gateright = document.getElementById("gateright");
window.addEventListener("scroll", () => {
  let value = window.scrollY;
  text.style.marginTop = value + 2.5 + "px";
  treeleft.style.left = -value + 1.5 + "px";
  treeleft.style.right = value + 1.5 + "px";
  gateleft.style.left = value + 0.01 + "px";
  gateright.style.right = value + 0.01 + "px";
});
