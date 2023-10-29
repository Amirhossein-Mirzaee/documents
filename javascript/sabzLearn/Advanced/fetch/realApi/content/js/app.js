window.addEventListener("load", () => {
  fetch("http://localhost:3000/api/users").then((res) => {
    console.log(res);
  });
});
