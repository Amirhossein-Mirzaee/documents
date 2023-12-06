const usernameElem = document.getElementById("username");
const passwordElem = document.getElementById("password");
const rememberMeElem = document.querySelector(".ck");
const loginBtn = document.querySelector("button");

const setCookie = (cookieName, cookieValue, exDay) => {
  const now = new Date();
  now.setTime(now.getTime() + exDay * 24 * 60 * 60 * 1000);

  document.cookie = `${cookieName}=${cookieValue};path=/;expires=${now}`;
};
const getCookie = (cookieName) => {
  const cookiesArray = document.cookie.split(";");
  let mainCookie = null;
  cookiesArray.some((cookie) => {
    if (cookie.includes(cookieName)) {
      mainCookie = cookie.substring(cookie.indexOf("=") + 1);
      return true;
    }
  });
  return mainCookie;
};
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (rememberMeElem.checked) {
    setCookie("login-token", usernameElem.value, 10);
  }
  usernameElem.value = "";
  passwordElem.value = "";
});
window.addEventListener("load", () => {
  usernameElem.value = getCookie("login-token");
});
