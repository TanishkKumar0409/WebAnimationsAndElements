const images = [
  {
    id: 1,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc6PZFk9HHFOBC_NyTGkCT2UiA9eMNgf1lBQ&s",
  },
  {
    id: 2,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhDDYThs1eW1IACN_TEGabX2hAHzBW7OIUDA&s",
  },
  {
    id: 3,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTdXd3tuTyoMkhkXHhy_aReU0iOfeAVRb3bV5M3p9Xg2XMJKOw8DbHLtLaKhw709vyhdI&usqp=CAU",
  },
  {
    id: 4,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYhB3_lPiYahTY599yxXD07oD0MWBU3bPFNJdT3wjJDutDD1hOvUyfysox2fsTzK1Tdqw&usqp=CAU",
  },
  {
    id: 5,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd1wxhRqRf9s7eUartZUzNegtMKTrKmbTjRinKR-3ezE0mOALFlDxViTA8g4lrC1s2gMg&usqp=CAU",
  },
  {
    id: 6,
    imgUrl:
      "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEyL3Jhd3BpeGVsX29mZmljZV80Nl9ibGFja193YWxscGFwZXJfbW9vbl9vdmVyX3RoZV9tb3VudGFpbl9oaWdobF8wZmM2YTdjOC03Mjg3LTRiZmEtOTNlOC0yNGM1ZGJhMmJlZDJfMS5qcGc.jpg",
  },
  {
    id: 7,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREmfoV8wWEebH6HkkAj2MgH4JJ_df6iBSlxpwrg8tEsKEV28GCMYlJhrMK9qG8m_FkPl4&usqp=CAU",
  },
  {
    id: 8,
    imgUrl:
      "https://img.freepik.com/premium-photo/super-amoled-display-dark-black-4k-wallpaper-highresolution-background-image-9x16_344876-2830.jpg",
  },
  {
    id: 9,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk5hBGFqin5LfOTOIdSmFJh2wj0jBcTsNO9Orvuj8qMyPb6TpveQTLBE_YmfZFVdHhk6w&usqp=CAU",
  },
  {
    id: 10,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjgVn6PWqeL8UWKJlMgimsGIWmWnmQN-TCUA&s",
  },
];

// Dynamically inject the images into the slider
const slider = document.querySelector(".slider");
images.forEach((image, index) => {
  const div = document.createElement("div");
  div.classList.add("item");
  div.style.setProperty("--position", index + 1);

  const img = document.createElement("img");
  img.src = image.imgUrl;

  div.appendChild(img);
  slider.appendChild(div);
});

// Animation and hover effect
setTimeout(() => {
  const items = document.getElementsByClassName("item");
  for (let i = items.length - 1; i >= 0; i--) {
    setTimeout(() => {
      items[i].classList.add("active");
    }, (items.length - i) * 500);
  }
}, 1000);

const items = document.getElementsByClassName("item");

for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("mouseover", hoverAdd);
  items[i].addEventListener("mouseout", hoverRemove);
}

function hoverAdd() {
  const slider = document.getElementsByClassName("slider");
  for (let i = 0; i < slider.length; i++) {
    slider[i].classList.add("paused");
  }
}

function hoverRemove() {
  const slider = document.getElementsByClassName("slider");
  for (let i = 0; i < slider.length; i++) {
    slider[i].classList.remove("paused");
  }
}
