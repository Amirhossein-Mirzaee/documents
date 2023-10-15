const colorBtns = document.querySelectorAll(".btn");

colorBtns.forEach((colorBtn) => {
  colorBtn.addEventListener("click", (event) => {
    const btnColor = event.target.dataset.color;
    document.documentElement.style.setProperty("--theme-color", btnColor);
  });
});
