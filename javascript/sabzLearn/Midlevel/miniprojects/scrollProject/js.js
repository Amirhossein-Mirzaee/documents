const customScroll = document.getElementById("scroll");
window.addEventListener("scroll", (e) => {
  const scrollTop = window.scrollY;
  const documentHeight = window.document.body.clientHeight;
  const windowHEight = window.innerHeight;
  const scrollPercent = (
    (scrollTop / (documentHeight - windowHEight)) *
    100
  ).toFixed();
  customScroll.style.width = scrollPercent + "%";
//   console.log(scrollPercent);
});
