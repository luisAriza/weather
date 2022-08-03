import "../styles/index.css";
import Weather from "./Weather.js";

const weather = new Weather("London", "uk");

const fetchWeather = async () => {
  const data = await weather.getWeather();
  console.log(data);
};

document.addEventListener("DOMContentLoaded", fetchWeather);
