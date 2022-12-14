function formatDate(timestamp) {
  let data = new Date(timestamp);
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
  let hour = data.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minutes = data.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let seconds = data.getSeconds();
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
   
  return `${day} ${date}.${month}.${year} ${hour}:${minutes}:${seconds} `;
}

function formatDay(timestamp) {
let date = new Date(timestamp * 1000);
let day = date.getDay();
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sut"];
 return days[day];
}

function displayForecast(response) {
  let forecast = response.data.daily;
  let forecastElement = document.querySelector("#forecast");
 
  let forecastHTML = `<div class="row">`;
 
  forecast.forEach(function(forecastDay, index) {
    if(index < 6) { 
    forecastHTML = forecastHTML + `
    <div class="col-auto ">
        <div class="weather-days">
          ${formatDay(forecastDay.dt)}
        </div>
       <figure class="icon">
           <img src="http://openweathermap.org/img/wn/${forecastDay.weather[0].icon}@2x.png" width="32"/>
        </figure>
        <div class="weather-max-temperature">
        ${Math.round(forecastDay.temp.max)}°
    </div>
    <div class="weather-min-temperature">
        ${Math.round(forecastDay.temp.min)}°
    </div>
    `;
    }
    forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
  });
  }
function getForecast(coordinates) {
  let apiKey = `17ad6e67aa629189f73b053634668b20`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}
search("Odessa");

function displayTemperature(response){
  let cityElement = document.querySelector("#city");
  let temperatureElement = document.querySelector("#temperature");
  let feelslikeElement = document.querySelector("#feels-like");
  let windElement = document.querySelector("#weend-element");
  let humidityElement = document.querySelector("#humidity-element");
  let dateElement = document.querySelector("#data-type");
  let iconElement = document.querySelector("#icon");
 
  celsiusTemperature = response.data.main.temp;
  let city = response.data.name;
  let country = response.data.sys.country;
  let temperature = Math.round(response.data.main.temp);
  let feelsLike = Math.round(response.data.main.feels_like);
  let wind = response.data.wind.speed;
  let humidity = response.data.main.humidity;
  let celsiusSign = `°C`;
  let signCelsius = celsiusSign.sup();
  cityElement.innerHTML = `${city}, ${country}`;
  temperatureElement.innerHTML= `${temperature}${signCelsius}`;
  feelslikeElement.innerHTML = `FEELSLIKE:${feelsLike}°`;
  windElement.innerHTML = `WIND:${wind}m/s`;
  humidityElement.innerHTML = `HUMDITY:${humidity}%`; 
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
  iconElement.setAttribute("src" , `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);

 getForecast(response.data.coord);
  }
  function handleSubmit(event) {
    event.preventDefault();
    let cityWath = document.querySelector("#search-text");
    search(cityWath.value);
    cityWath.value = "";
  }
 
  let form = document.querySelector("#form");
  form.addEventListener("submit", handleSubmit);

  function search(city) {
    let apiKey = "17ad6e67aa629189f73b053634668b20";
    let urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(urlApi).then(displayTemperature);
  }

  function showDegreesCelsius(event) {
    event.preventDefault();
    let h2 = document.querySelector("h2");
    celsius.classList.add("active");
    fahrenheit.classList.remove("active");
    let celsiusDegreesSign = `°`;
    let signCelsiusDegrees = celsiusDegreesSign.sup();
    h2.innerHTML = `${Math.round(celsiusTemperature)}${signCelsiusDegrees}`;
   }
  
 function showDegreesFahrenheit(event) {
    event.preventDefault();
    let fahrengeitElement = document.querySelector("h2");
    celsius.classList.remove("active");
    fahrenheit.classList.add("active");
    
    let fahrengeitTemperature = (celsiusTemperature * 9) / 5 + 32;
    let fahrengeitSign = `°`;
    let signFahrengeit = fahrengeitSign.sup();
    fahrengeitElement.innerHTML = `${Math.round(fahrengeitTemperature)}${signFahrengeit}`;
  }

  let celsius = document.querySelector("#celsius");
  celsius.addEventListener("click", showDegreesCelsius);

  let fahrenheit = document.querySelector("#fahrenheit");
  fahrenheit.addEventListener("click", showDegreesFahrenheit);

  
function showPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let keyApi = "7d478f69e1b2f5d563653f13f5f91d76";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${keyApi}&units=metric`;
  axios.get(`${apiUrl}&${keyApi}`).then(displayTemperature);
}
function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}
let locationDot = document.querySelector("#location-dot");
locationDot.addEventListener("click", getCurrentPosition);

displayForecast();

