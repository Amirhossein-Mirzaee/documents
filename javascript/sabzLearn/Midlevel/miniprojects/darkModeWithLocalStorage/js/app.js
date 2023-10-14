const switchElement = document.querySelector(".switch");
switchElement.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  if (document.body.className.includes("dark")) {
    localStorage.setItem("theme", "dark");
  } else localStorage.setItem("theme", "light");
});
window.onload = () => {
  const localStorageTheme = localStorage.getItem("theme");
  console.log(localStorageTheme);
  if (localStorageTheme === "dark") {
    document.body.classList.add("dark");
  } else document.body.classList.remove("dark");
};
