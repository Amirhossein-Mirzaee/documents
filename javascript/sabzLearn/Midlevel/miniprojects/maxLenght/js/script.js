const $ = document;
const userName = $.querySelector("input");
const maxlenghtNum = $.querySelector(".counter");
const maxlenght = userName.getAttribute("maxlength");

userName.addEventListener("keyup", () => {
  maxlenghtNum.innerHTML = +maxlenght - userName.value.length;
});
