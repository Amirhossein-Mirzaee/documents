let allProducts = [
  {
    id: 1,
    title: "Album 1",
    price: 12.93,
    img: "Images/Album 1.png",
    count: 1,
  },
  { id: 2, title: "Album 2", price: 21, img: "Images/Album 2.png", count: 1 },
  { id: 3, title: "Album 3", price: 33, img: "Images/Album 3.png", count: 1 },
  {
    id: 4,
    title: "Album 4",
    price: 41.98,
    img: "Images/Album 4.png",
    count: 1,
  },
  { id: 5, title: "Coffee", price: 98, img: "Images/Cofee.png", count: 1 },
  { id: 6, title: "Shirt", price: 65.33, img: "Images/Shirt.png", count: 1 },
];

let userBasket = [];

let $ = document;
const shopItemsContainer = $.querySelector(".shop-items");
const bastekProductsContainer = $.querySelector(".cart-items");
const removeAllProductsBtn = $.querySelector("#remove-all-products");
const cardTotalPrice = $.querySelector(".cart-total-price");

allProducts.forEach(function (product) {
  let productContainer = $.createElement("div");
  productContainer.classList.add("shop-item");

  let productTitleSpan = $.createElement("span");
  productTitleSpan.classList.add("shop-item-title");
  productTitleSpan.innerHTML = product.title;

  let productImageElem = $.createElement("img");
  productImageElem.classList.add("shop-item-image");
  productImageElem.setAttribute("src", product.img);

  let productDetailsContainer = $.createElement("div");
  productDetailsContainer.classList.add("shop-item-details");

  let productPriceSpan = $.createElement("span");
  productPriceSpan.innerHTML = product.price;
  productPriceSpan.classList.add("shop-item-price");

  let prodcutAddButton = $.createElement("button");
  prodcutAddButton.innerHTML = "ADD TO CART";
  prodcutAddButton.className = "btn btn-primary shop-item-button";
  prodcutAddButton.addEventListener("click", function () {
    addProductToBasketArray(product.id);
  });

  productDetailsContainer.append(productPriceSpan, prodcutAddButton);
  productContainer.append(
    productTitleSpan,
    productImageElem,
    productDetailsContainer
  );
  shopItemsContainer.append(productContainer);
});

function addProductToBasketArray(productId) {
  const exciting = userBasket.find(function (product) {
    return product.id === productId;
  });
  if (exciting) {
    exciting.count++;
    calculateToatal(userBasket);
    basketProductsGenerator(userBasket);
  } else {
    const mainProduct = allProducts.find(function (product) {
      return product.id === productId;
    });
    if (mainProduct) {
      userBasket.push(mainProduct);
      calculateToatal(userBasket);
      basketProductsGenerator(userBasket);
    }
  }
}

function basketProductsGenerator(userBasketArray) {
  bastekProductsContainer.innerHTML = "";

  userBasketArray.forEach(function (product) {
    let basketProductContainer = $.createElement("div");
    basketProductContainer.classList.add("cart-row");

    let basketProductDetailsContainer = $.createElement("div");
    basketProductDetailsContainer.className = "cart-item cart-column";

    let basketProductImg = $.createElement("img");
    basketProductImg.setAttribute("src", product.img);
    basketProductImg.setAttribute("width", "100");
    basketProductImg.setAttribute("height", "100");
    basketProductImg.classList.add("cart-item-image");

    let basketProductTitleSpan = $.createElement("span");
    basketProductTitleSpan.classList.add("cart-item-title");
    basketProductTitleSpan.innerHTML = product.title;

    basketProductDetailsContainer.append(
      basketProductImg,
      basketProductTitleSpan
    );

    let basketProductPriceSpan = $.createElement("span");
    basketProductPriceSpan.className = "cart-price cart-column";
    basketProductPriceSpan.innerHTML = product.price;

    let basketProductInputsContainer = $.createElement("div");
    basketProductInputsContainer.className = "cart-quantity cart-column";

    let basketProductInput = $.createElement("input");
    basketProductInput.className = "cart-quantity-input";
    basketProductInput.value = product.count;
    basketProductInput.setAttribute("type", "number");
    basketProductInput.addEventListener("change", () => {
      updtaeProductCount(product.id, basketProductInput.value);
    });

    let basketProductRemoveBtn = $.createElement("button");
    basketProductRemoveBtn.className = "btn btn-danger";
    basketProductRemoveBtn.innerHTML = "Remove";
    basketProductRemoveBtn.addEventListener("click", function () {
      removeProductFromBasket(product.id);
      calculateToatal(userBasket);
    });

    basketProductInputsContainer.append(
      basketProductInput,
      basketProductRemoveBtn
    );

    basketProductContainer.append(
      basketProductDetailsContainer,
      basketProductPriceSpan,
      basketProductInputsContainer
    );

    bastekProductsContainer.append(basketProductContainer);
  });
}

function removeProductFromBasket(productId) {
  userBasket = userBasket.filter(function (product) {
    return product.id !== productId;
  });

  basketProductsGenerator(userBasket);
}

const calculateToatal = (userBasketArray) => {
  let sum = 0;
  userBasketArray.forEach((product) => {
    sum = sum + product.count * product.price;
  });
  cardTotalPrice.innerHTML = sum.toFixed(2);
};
const updtaeProductCount = (productId, newCount) => {
  userBasket.forEach((product) => {
    if (product.id === productId) {
      product.count = newCount;
    }
  });
  calculateToatal(userBasket);
};
