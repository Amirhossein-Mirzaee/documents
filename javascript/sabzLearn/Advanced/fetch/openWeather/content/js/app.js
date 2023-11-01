const $ = document;
const inputElem = $.querySelector("input");
const cityElem = $.querySelector(".city");
const tempDiv = $.querySelector(".temp");
const weatherElem = $.querySelector(".weather");
const hiLoEleme = $.querySelector(".hi-low");
const dateDiv = $.querySelector(".date");

const apiData = {
  key: "61de807e9c9ea486a7800d6491220695",
  URL: "https://api.openweathermap.org/data/2.5/weather?q=",
};
const fetchData = () => {
  const countryName = inputElem.value;
  fetch(`${apiData.URL}${countryName}&&appid=${apiData.key}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      showData(data);
    });
};
function showData(data) {
  cityElem.innerHTML = `${data.name},${data.sys.country}`;
  tempDiv.innerHTML = `${(data.main.temp - 273.15).toFixed(0)}°c`;
  weatherElem.innerHTML = `${data.weather[0].main}`;
  hiLoEleme.innerHTML = `${(data.main.temp_min - 273.15).toFixed(0)}°c / ${(
    data.main.temp_max - 273.15
  ).toFixed(0)}°c`;
}
const showDate = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const now = new Date();
  const day = days[now.getDay()];
  const month = months[now.getMonth()];
  const year = now.getFullYear();
  const date = now.getDate();

  return `${day} ${date} ${month} ${year}`;
};
dateDiv.innerHTML = showDate();
inputElem.addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    fetchData();
  }
});

// ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
