function nameOfCity(event) {
    event.preventDefault();
    let cityWath = document.querySelector("#search-text");
    searchCity(cityWath.value);
    let h1 = document.querySelector("h1");
    h1.innerHTML = `${cityWath.value}`;
  }
  
  let form = document.querySelector("#form");
  form.addEventListener("submit", nameOfCity);
  
  function searchCity(city) {
    let keyApi = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${keyApi}&units=metric`;
    axios.get(apiUrl).then(showTemperature);
  }
  
  function showTemperature(response) {
    let city = response.data.name;
    let currentCity = document.querySelector("h1");
    currentCity.innerHTML = city;
    let temperature = Math.round(response.data.main.temp);
    let h2 = document.querySelector("h2");
    h2.innerHTML = `${temperature}°C `;
  
    let feelsLike = Math.round(response.data.main.feels_like);
    let feelslikeElement = document.querySelector("#feels-like");
    feelslikeElement.innerHTML = `FEELSLIKE:${feelsLike}°`;
  
    let wind = response.data.wind.speed;
    let windElement = document.querySelector("#weend-element");
    windElement.innerHTML = `WIND:${wind}m/s`;
  
    let humidity = response.data.main.humidity;
    let humidityElement = document.querySelector("#humidity-element");
    humidityElement.innerHTML = `HUMDITY:${humidity}%`;
  }
  
  function showPosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let keyApi = "001bc651977f4b024af4d84282b0f02a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${keyApi}&units=metric`;
    axios.get(`${apiUrl}&${keyApi}`).then(showTemperature);
  }
  function getCurrentPosition() {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
  let locationDot = document.querySelector("#location-dot");
  locationDot.addEventListener("click", getCurrentPosition);
  
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