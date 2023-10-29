const $ = document;

const fName = $.querySelector(".firstname");
const lName = $.querySelector(".lastname");
const passWord = $.querySelector(".password");
const btn = $.querySelector("button");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const userData = {
    firstName: fName.value,
    lastName: lName.value,
    passWord: passWord.value,
  };

  fetch("https://randomuser.me/api/", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(userData),
  }).then((res) => {
    console.log(res);
  });
});
