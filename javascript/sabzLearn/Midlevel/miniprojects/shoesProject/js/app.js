// DOM => Document Object Model
// BOM => Browser Object Model

const productConatiner = document.querySelector(".container");

const productArr = [
  { id: 1, title: "sport shoe", price: 53 ,img:"images/1.png" },
  { id: 2, title: "women shoe", price: 83 ,img:"images/2.png" },
  { id: 3, title: "Boots", price: 94 ,img:"images/3.png" },
];

productArr.forEach((prtoduct) => {
  productConatiner.insertAdjacentHTML(
    "beforeend",
    '<div class="product-card"><h1>' +
      prtoduct.title +
      '</h1><p>Lorem ipsum, or lipsum as it is sometimes known</p><div class="product-pic" style="background-image: url('+ prtoduct.img +');"></div><div class="product-info"><div class="product-price">' +
      prtoduct.price +
      '</div><a href="product.html?id=' +
      prtoduct.id +
      '" class="product-button">See More</a></div></div>'
  );
});
