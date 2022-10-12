function displayTemperature(response){
  let cityElement = document.querySelector("#city");
  let temperatureElement = document.querySelector("#temperature");
  let feelslikeElement = document.querySelector("#feels-like");
  let windElement = document.querySelector("#weend-element");
  let humidityElement = document.querySelector("#humidity-element");
  let city = response.data.name;
  let temperature = Math.round(response.data.main.temp);
  let feelsLike = Math.round(response.data.main.feels_like);
  let wind = response.data.wind.speed;
  let humidity = response.data.main.humidity;
  cityElement.innerHTML = `${city}`;
  temperatureElement.innerHTML= `${temperature}°c`;
  feelslikeElement.innerHTML = `FEELSLIKE:${feelsLike}°`;
  windElement.innerHTML = `WIND:${wind}m/s`;
  humidityElement.innerHTML = `HUMDITY:${humidity}%`; 
}

let city =`New York`;
let apiKey = "17ad6e67aa629189f73b053634668b20";
let urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(urlApi).then(displayTemperature);

let data = new Date();
  
let paragraph = document.querySelector("#data-type");

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[data.getDay()];
let date = data.getDate();
if (date < 10) {
  date = `0${date}`;
}
let months = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12"
];
let month = months[data.getMonth()];
let year = data.getFullYear();
let currentDate = `${day} ${date}.${month}.${year}`;
let hour = data.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let minutes = data.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let seconds = data.getMinutes();
if (seconds < 10) {
  seconds = `0${seconds}`;
}
let currentTime = `${hour}:${minutes}:${seconds}`;
let allDate = `${currentDate}  ${currentTime}`;

paragraph.innerHTML = `${allDate}`;
 
  
  function showDegreesCelsius(event) {
    event.preventDefault();
    let h2 = document.querySelector("h2");
    h2.innerHTML = `20°`;
  }
  
  let celsius = document.querySelector("#celsius");
  celsius.addEventListener("click", showDegreesCelsius);
  
  function showDegreesFahrenheit(event) {
    event.preventDefault();
    let h2 = document.querySelector("h2");
    h2.innerHTML = `62°`;
  }
  
  let fahrenheit = document.querySelector("#fahrenheit");
  fahrenheit.addEventListener("click", showDegreesFahrenheit);