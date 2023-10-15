const $ = document;

const weightInputElem = $.getElementById("weight");
const heightInputElem = $.getElementById("height");
const weightSpan = $.getElementById("weight-val");
const hightSpan = $.getElementById("height-val");
const result = $.getElementById("result");
const category = $.getElementById("category");

const bmiCalculator = () => {
  const weightInputElemValue = weightInputElem.value;
  const heightInputElemValue = heightInputElem.value;
  const bmiValue = (
    weightInputElemValue / Math.pow(heightInputElemValue / 100, 2)
  ).toFixed(1);
  weightSpan.innerHTML = weightInputElemValue + "kg";
  hightSpan.innerHTML = heightInputElemValue + "cm";
  result.innerHTML = bmiValue;
  if (bmiValue < 18.5) {
    category.innerHTML = "از لاغری داری میمیری";
    result.style.color = "blue";
  } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    category.innerHTML = "خوبه افرین";
    result.style.color = "green";
  } else if (bmiValue >= 25 && bmiValue < 29.9) {
    category.innerHTML = "تپل شدیا....:(";
    result.style.color = "red";
  } else {
    category.innerHTML = "گودزیلایی که...";
    result.style.color = "brown";
  }
};

weightInputElem.addEventListener("input", bmiCalculator);
heightInputElem.addEventListener("input", bmiCalculator);
