const $ = document;

const addTodoBtn = $.getElementById("add_btn");
const todoForm = $.getElementById("todo_form");

addTodoBtn.addEventListener("click", () => {
  todoForm.style.top = "10%";
});
