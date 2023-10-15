const title = document.querySelector(".title");
document.addEventListener("keyup", (event) => {
  appendValueToDom(event);
  const userEventKey = event.key.toUpperCase();
  const mainKeyElem = document.getElementById(userEventKey);
  mainKeyElem.classList.add("hit");
  mainKeyElem.addEventListener("animationend", () => {
    mainKeyElem.classList.remove("hit");
  });
  console.log(mainKeyElem);
});
const appendValueToDom = (event) => {
  console.log(typeof(event.keyCode));
if (event.keyCode === 8) {
    title.innerHTML = title.innerHTML.slice(0,-1)
    return
}
  title.innerHTML += event.key;
};
