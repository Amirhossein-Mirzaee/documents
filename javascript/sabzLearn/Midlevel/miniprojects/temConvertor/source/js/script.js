const $ = document;

const firstValue = $.querySelector(".C");
const secValue = $.querySelector(".F");
const convBtn = $.querySelector(".convertButton");
const resBtn = $.querySelector(".resetButton");
const chgBtn = $.querySelector(".changeButton");
const converter = $.getElementById("converter");
const result = $.querySelector(".result");

convBtn.addEventListener("click", () => {
  if (
    converter.value === "" ||
    isNaN(converter.value) ||
    converter.value === " "
  ) {
    result.innerHTML = "Insert Correct Temp";
    result.style.color = "red";
  } else {
    if (firstValue.innerHTML === "°C") {
      result.innerHTML =
        "Temp is:" + " " + (converter.value * 1.8 + 32).toFixed(2) + "°F";
    } else {
      result.innerHTML =
        "Temp is:" + " " + ((converter.value - 32) * 0.55).toFixed(2) + "°C";
    }
    result.style.color = "black";
  }
});
resBtn.addEventListener("click", () => {
  result.innerHTML = "";
  converter.value = "";
});
chgBtn.addEventListener("click", () => {
  if (firstValue.innerHTML === "°C") {
    firstValue.innerHTML = "°F";
    secValue.innerHTML = "°C";
    converter.placeholder = "°F";
    $.title = "SalzLearn| Js | °F to °C";
  } else {
    firstValue.innerHTML = "°C";
    secValue.innerHTML = "°F";
    converter.placeholder = "°C";
    $.title = "SalzLearn| Js | °C to °F";
  }
});
