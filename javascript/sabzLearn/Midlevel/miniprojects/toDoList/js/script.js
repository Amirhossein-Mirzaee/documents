const inputElem = document.querySelector("input");
// const container = document.getElementsByClassName("container");
const addTodoForm = document.querySelector(".add");
const todo = document.querySelector(".todos");

addTodoForm.addEventListener("submit", (event) => {
  event.preventDefault();
});
const addNewTod = (newToDoValue) => {
  const newToDoLi = document.createElement("li");
  newToDoLi.className =
    "list-group-item d-flex justify-content-between align-items-center";
  const newToDoTitleSpan = document.createElement("span");
  newToDoTitleSpan.innerHTML = newToDoValue;
  const newToDoTrash = document.createElement("i");


  newToDoLi.append(newToDoTitleSpan, newToDoTrash);


  newToDoTrash.className = "fa fa-trash-o delete";

  todo.append(newToDoLi);

};

inputElem.addEventListener("keydown", (event) => {
  const newToDoValue = event.target.value.trim();

  if (event.key === "Enter") {
    if (newToDoValue) {
      addNewTod(newToDoValue);
    }
  }
});

// function remove() {}
