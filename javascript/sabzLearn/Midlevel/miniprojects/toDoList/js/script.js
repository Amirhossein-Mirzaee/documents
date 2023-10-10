const $ = document;

const newTodo = $.querySelector("input");
const addTodo = $.querySelector("form");
const list = $.querySelector("ul");

const addToList = (newTodoValue) => {
  const newToDoLi = $.createElement("li");
  newToDoLi.className =
    "list-group-item d-flex justify-content-between align-items-center";
  const newToDoTitleSpan = $.createElement("span");
  newToDoTitleSpan.innerHTML = newTodoValue;
  const newToDoTrash = $.createElement("i");
  newToDoTrash.addEventListener("click", (event) => {
    event.target.parentElement.remove();
  });
  newToDoTrash.className = "fa fa-trash-o delete";
  newToDoLi.append(newToDoTitleSpan, newToDoTrash);
  list.append(newToDoLi);
};

addTodo.addEventListener("submit", (event) => {
  event.preventDefault();
});

newTodo.addEventListener("keydown", (event) => {
  const newTodoValue = event.target.value.trim();

  if (event.key === "Enter" && newTodoValue) {
    newTodo.value = "";
    addToList(newTodoValue);
  }
});
