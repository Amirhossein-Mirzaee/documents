const $ = document;

const navElem = $.getElementById("mainNav");
const items = $.querySelectorAll("li");
const logo = $.querySelector("img");

window.addEventListener("scroll", () => {
  if ($.documentElement.scrollTop > 0) {
    navElem.classList.add("bg-black");
    navElem.classList.add("txt-white");
    logo.style.height = "64px";
  } else {
    logo.style.height = "84px";
    navElem.classList.remove("txt-white");
    navElem.classList.remove("bg-black");
  }
});
