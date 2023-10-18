const $ = document;
const backBtn = $.querySelector("button");
const shoeTitle = $.querySelector("h1");
const shoeDesc = $.querySelector("p");
const shoeImage = $.querySelector("img");

const productArr = [
  { id: 1, title: "sport shoe", price: 53, img: "images/1.png" },
  { id: 2, title: "women shoe", price: 83, img: "images/2.png" },
  { id: 3, title: "Boots", price: 94, img: "images/3.png" },
];

const locationParams = new URLSearchParams(location.search);
const mainProductId = locationParams.get("id");

const foundedProduct = productArr.find((product) => {
  return product.id == mainProductId;
});

if (foundedProduct) {
  shoeImage.setAttribute("src", foundedProduct.img);
  shoeTitle.innerHTML = foundedProduct.title;
  shoeDesc.innerHTML = foundedProduct.price;
}else{
 location.href = "http://127.0.0.1:5501/sabzLearn/Midlevel/miniprojects/shoesProject/index.html"
}
console.log(foundedProduct);
backBtn.addEventListener("click", () => {
  history.back();
});
