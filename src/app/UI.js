export default class UI {
  constructor() {
    this.location = document.getElementById("weather-location");
    this.desc = document.getElementById("weather-description");
    this.temp = document.getElementById("weather-string");
    this.humidity = document.getElementById("weather-humidity");
    this.wind = document.getElementById("weather-wind");
  }
  render(weather) {
    this.location.textContent = `${weather.name} / ${weather.sys.country}`;
    this.desc.textContent = weather.weather[0].description;
    this.temp.textContent = `${weather.main.temp}°C`;
    this.humidity.innerHTML = `<strong>Humidity</strong>: ${weather.main.humidity}%`;
    this.wind.innerHTML = `<strong>Wind</strong>: ${weather.wind.speed} m/s`;
  }
}
