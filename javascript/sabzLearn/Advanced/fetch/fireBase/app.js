const $ = document;
const firstname = $.querySelector(".firstname");
const lastname = $.querySelector(".lastname");
const password = $.querySelector(".password");
const form = $.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const userData = {
    firstName: firstname.value,
    lastName: lastname.value,
    passWord: password.value,
  };
  fetch("https://speedy-solstice-390610-default-rtdb.firebaseio.com/", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
});
