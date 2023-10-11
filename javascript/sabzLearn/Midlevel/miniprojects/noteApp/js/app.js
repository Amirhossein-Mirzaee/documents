const $ = document;
const inputElem = $.getElementById("input-field");
const listed = $.getElementById("listed");
const btnSave = $.getElementById("btn-save");
const btnDelete = $.getElementById("btn-delete");
const colors = $.querySelectorAll(".color-box");

colors.forEach((color) => {
  color.addEventListener("click", (event) => {
    const mainColor = event.target.style.backgroundColor;
    inputElem.style.backgroundColor = mainColor;
  });
});

btnDelete.addEventListener("click", () => {
  inputElem.value = "";
  inputElem.style.backgroundColor = "white";
});

const addToList = () => {
  if (inputElem.value) {
    const newDiv = $.createElement("div");
    const inputBg = inputElem.style.backgroundColor;
    newDiv.style.backgroundColor = inputBg;
    newDiv.className = "card shadow-sm rounded";
    newDiv.addEventListener("click", (event) => {
      event.target.parentElement.remove();
    });
    const newTitle = $.createElement("p");
    newTitle.className = "card-text p-3";
    newTitle.innerHTML = inputElem.value;
    newDiv.append(newTitle);
    listed.append(newDiv);
    inputElem.value = "";
    inputElem.style.backgroundColor = "white";
  }
};

btnSave.addEventListener("click", addToList);
inputElem.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    if (inputElem.value) {
      addToList();
    }
  }
});
