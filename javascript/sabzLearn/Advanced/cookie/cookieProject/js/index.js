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

window.addEventListener("load", () => {
  const isLogin = getCookie("login-token");
  console.log(isLogin);
  if (!isLogin) {
    location.href = "http://127.0.0.1:5501/Advanced/cookie/cookieProject/login.html?";
  }
});
