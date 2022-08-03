import "../styles/index.css";
import Weather from "./Weather.js";
import UI from "./UI.js";

const weather = new Weather("London", "uk");
const ui = new UI();

const fetchWeather = async () => {
  const data = await weather.getWeather();
  ui.render(data);
};

document
  .getElementById("weather-change-btn")
  .addEventListener("click", (event) => {
    const city = document.getElementById("city").value;
    const countryCode = document.getElementById("country-code").value;
    weather.changeLocation(city, countryCode);
    fetchWeather();

    event.preventDefault();
  });

document.addEventListener("DOMContentLoaded", fetchWeather);
