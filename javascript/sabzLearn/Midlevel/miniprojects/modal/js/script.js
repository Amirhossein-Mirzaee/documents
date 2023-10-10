const $ = document;
const btn = $.querySelector("button");
const modal = $.querySelector(".modal-parent");
const center = $.querySelector("section");
const close = $.querySelector(".X");
btn.addEventListener("click", () => {
  modal.style.display = "block";
  center.style.filter = "blur(10px)";
  btn.blur();
});
close.addEventListener("click", () => {
  modal.style.display = "none";
  center.style.filter = "none";
});
document.body.addEventListener("keyup", (event) => {
  if (event.key === "Escape") {
    modal.style.display = "none";
    center.style.filter = "none";
  }
});
