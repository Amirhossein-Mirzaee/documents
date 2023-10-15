const $ = document;

const sliderImgElem = $.querySelector("img");
const prevBtn = $.querySelector(".prev");
const nextBtn = $.querySelector(".next");

const photoSrc = ["image/1.jpg", "image/2.png", "image/3.jpg"];
let imageIndex = 0;

prevBtn.addEventListener("click", () => {
  imageIndex--;
  if (imageIndex < 0) {
    imageIndex = photoSrc.length - 1;
  }
  sliderImgElem.setAttribute("src", photoSrc[imageIndex]);
});
nextBtn.addEventListener("click", () => {
  imageIndex++;
  if (imageIndex > photoSrc.length - 1) {
    imageIndex = 0;
  }
  sliderImgElem.setAttribute("src", photoSrc[imageIndex]);
});

setInterval(() => {
  imageIndex++;
  if (imageIndex > photoSrc.length - 1) {
    imageIndex = 0;
  }
  sliderImgElem.setAttribute("src", photoSrc[imageIndex]);
}, 3000);
