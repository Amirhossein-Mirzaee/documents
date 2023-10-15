const inputRange = document.getElementById("range");

inputRange.addEventListener("change", (event) => {
  const inputRangeValue = event.target.value;
  document.body.style.filter = "brightness(" + inputRangeValue + "%)";
});
