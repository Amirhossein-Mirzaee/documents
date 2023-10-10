const $ = document;
const contextMenu = $.getElementById("contextMenu");
const all = $.querySelector("body");

all.addEventListener("contextmenu", (event) => {
  contextMenu.style.display = "block";
  contextMenu.style.top = event.pageY + "px";
  contextMenu.style.left = event.pageX + "px";
});
all.addEventListener("click", () => {
  contextMenu.style.display = "none";
});
all.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    contextMenu.style.display = "none";
  }
});
