const $ = document;
const inputElem = $.getElementById("input-field");
const listed = $.getElementById("listed");
const btnSave = $.getElementById("btn-save");
const btnDelete = $.getElementById("btn-delete");
const colors = $.querySelectorAll(".color-box");
console.log();

const handleAdd = (event) => {
  console.log(event.target.type);
  const inputElemValue = event.target.value.trim();
  if (event.key === "Enter" ||  === "click") {
    if (inputElemValue) {
      inputElem.value = "";
      addToList(inputElemValue);
    }
  }
};

const addToList = (inputElemValue) => {
  const newDiv = $.createElement("div");
  newDiv.className = "card shadow-sm rounded";
  const newTitle = $.createElement("p");
  newTitle.className = "card-text p-3";
  newTitle.innerHTML = inputElemValue;
  newDiv.append(newTitle);
  listed.append(newDiv);
};
btnDelete.addEventListener("click", () => {
  inputElem.value = "";
});
btnSave.addEventListener("click", handleAdd);
inputElem.addEventListener("keydown", handleAdd);



btnDelete.addEventListener()