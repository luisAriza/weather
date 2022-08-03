export default class Store {
  constructor() {
    this.city;
    this.countryCode;
    this.defaultCity = "New York";
    this.defaultCountry = "us";
  }
  getLocationData() {
    let getCity = localStorage.getItem("city");
    let getCountry = localStorage.getItem("countryCode");
    if (getCity === null || getCountry === null) {
      this.city = this.defaultCity;
      this.countryCode = this.defaultCountry;
    } else {
      this.city = getCity;
      this.countryCode = getCountry;
    }
    return {
      city: this.city,
      countryCode: this.countryCode,
    };
  }
  setLocationData(city, countryCode) {
    localStorage.setItem("city", city);
    localStorage.setItem("countryCode", countryCode);
  }
}
