const $ = document;
const inputElem = $.querySelector("input");
const form = $.querySelector(".add");
const list = $.querySelector(".todos");
const deleteBtn = $.querySelector("i");
const listItems = $.querySelectorAll("li");

form.addEventListener("submit", (event) => {
  event.preventDefault();
});
function addToList(inputElemValue) {
  const newToDoLi = $.createElement("li");
  newToDoLi.className =
    "list-group-item d-flex justify-content-between align-items-center";
  const newToDoTitleSpan = $.createElement("span");
  newToDoTitleSpan.innerHTML = inputElemValue;
  const newToDoTrash = $.createElement("i");
  newToDoTrash.className = "fa fa-trash-o delete";

  newToDoTrash.addEventListener("click", (event) => {
    console.log(event.target.parentElement.remove());
  });

  newToDoLi.append(newToDoTitleSpan, newToDoTrash);
  list.append(newToDoLi);
  console.log(newToDoLi);
}

inputElem.addEventListener("keydown", (event) => {
  const inputElemValue = event.target.value.trim();
  //   console.log(inputElemValue);

  if (event.key === "Enter") {
    if (inputElemValue) {
      inputElem.value = "";
      addToList(inputElemValue);
    }
  }
});
deleteBtn.addEventListener("click", (event) => {
  listItems[event.target.value].remove();
});
