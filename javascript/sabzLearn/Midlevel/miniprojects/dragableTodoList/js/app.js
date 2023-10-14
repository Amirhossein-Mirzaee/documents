const $ = document;
const entire = $.querySelector(".todo-container");
const addTodoBtn = $.getElementById("add_btn");
const todoForm = $.getElementById("todo_form");
const inputElem = $.getElementById("todo_input");
const closeModalBtn = $.getElementById("modal_close");
const subBtn = $.getElementById("todo_submit");
const nostatus = $.getElementById("no_status");
const form = $.querySelector(".body");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
// });

addTodoBtn.addEventListener("click", () => {
  todoForm.style.top = "30%";
});
const addToList = (inputElemValue) => {
  const newToDoDiv = $.createElement("div");
  newToDoDiv.className = "todo";
  newToDoDiv.innerHTML = inputElemValue;
  const newToDoSpan = $.createElement("span");
  newToDoSpan.innerHTML = "&times;";
  newToDoSpan.className = "close";
  newToDoSpan.addEventListener("click", (event) => {
    event.target.parentElement.remove();
  });
  newToDoDiv.append(newToDoSpan);
  nostatus.append(newToDoDiv);
  console.log(nostatus);
};

inputElem.addEventListener("keydown", (event) => {
  const inputElemValue = event.target.value.trim();

  if (event.key === "Enter") {
    if (inputElemValue) {
      todoForm.style.top = "-30%";
      inputElem.value = "";

      addToList(inputElemValue);
    }
  }
});
closeModalBtn.addEventListener("click", () => {
  todoForm.style.top = "-30%";
  entire.style.filter = "none";
});
