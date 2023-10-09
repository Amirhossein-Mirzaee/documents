const citiesData = [
  {
    city: "Tehran",
    temp: 12,
    weather: "Sunny",
    humidity: 23,
    windSpeed: 32,
  },
  {
    city: "Shiraz",
    temp: 9,
    weather: "windy",
    humidity: 12,
    windSpeed: 14,
  },
  {
    city: "Tabriz",
    temp: 1,
    weather: "rainy",
    humidity: 43,
    windSpeed: 12,
  },
  {
    city: "Mashhad",
    temp: 16,
    weather: "snowy",
    humidity: 7,
    windSpeed: 24,
  },
  {
    city: "Esfahan",
    temp: 23,
    weather: "Sunny",
    humidity: 15,
    windSpeed: 18,
  },
];

const $ = document;

const search = $.getElementById("search");
const searchBar = $.querySelector(".search-bar");
search.addEventListener("click", function () {
  const searchBarValue = searchBar.value;
  //   const mainCityData = citiesData[searchBarValue]; it's better to don't use
  const mainCityData = citiesData.find((item) => {
    return item.city === searchBarValue;
  });

  if (mainCityData) {
    $.querySelector(".city").innerHTML = "Weather In" + " " + mainCityData.city;
    $.querySelector(".temp").innerHTML = mainCityData.temp + "°C";
    $.querySelector(".description").innerHTML = mainCityData.weather;
    $.querySelector(".humidity").innerHTML =
      "Humidity:" + " " + mainCityData.humidity + "%";
    $.querySelector(".wind").innerHTML =
      "Wind speed:" + " " + mainCityData.windSpeed + " " + " km/h";

    $.querySelector(".weather").classList.remove("loading");
  } else {
    alert("شهر موردنظر یافت نشد...:(");
  }
});
