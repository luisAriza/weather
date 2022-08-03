export default class Weather {
  constructor(city, countryCode) {
    this.apikey = "5d38bd50fb2f84c3c7421dd326b4d3ab";
    this.city = city;
    this.countryCode = countryCode;
  }
  async getWeather() {
    const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apikey}&units=metric`;
    const response = await fetch(URI);
    const data = await response.json();

    return data;
  }
}
