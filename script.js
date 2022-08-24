function search(city) {
    let apiKey = "765b9f49bb5f837e1b35ec83b522ea28";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showtemperature);
  }
  
  function searchsubmit(event) {
    event.preventDefault();
    let inputcity = document.querySelector("#text-input");
    search(inputcity.value);
  }
  let form = document.querySelector("#search-form");
  form.addEventListener("submit", searchsubmit);
  
  function showtemperature(response) {
    console.log(response.data);

celsiusTemperature = response.data.main.temp;
let tempelement = document.querySelector("#temp");
tempelement.innerHTML = Math.round(celsiusTemperature);
  
let inputcity = response.data.name;
let cityElement = document.querySelector("#city");
cityElement.innerHTML = inputcity;

let description = document.querySelector("#description-element");
description.innerHTML = response.data.weather[0].description;

let humidity = Math.round(response.data.main.humidity);
let humidityelement = document.querySelector("#humidity");
humidityelement.innerHTML = humidity ;

let wind = Math.round(response.data.wind.speed);
let windelement = document.querySelector("#wind");
windelement.innerHTML = wind;

let iconweather = document.querySelector("#imageweather");
iconweather.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);

  }
  

  function displayCelsiusTemperature(event) {
    event.preventDefault();
    
    let celsiusElement = document.querySelector("#temp");
    celsiusElement.innerHTML = Math.round(celsiusTemperature);
  }
  let celsius = document.querySelector("#celsius-link");
  celsius.addEventListener("click", displayCelsiusTemperature);

  function displayFahrenheitTemperature(event) {
    event.preventDefault();
    
  celsius.classList.remove("active");
  farinh.classList.add("active");
    let fahrenElement = document.querySelector("#temp");
    let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
    fahrenElement.innerHTML = Math.round(fahrenheitTemperature);
  }

  let farinh = document.querySelector("#fahrenheit-link");
  farinh.addEventListener("click", displayFahrenheitTemperature);
  
  let fahrenheiTemperature= null;


  let now = new Date();
  let h3 = document.querySelector("h3");
  
  function zero_first_format(value) {
    if (value < 10) {
      value = "0" + value;
    }
    return value;
  }
  
  let hour = now.getHours();
  let min = zero_first_format(now.getMinutes());
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];
  let day = days[now.getDay()];
  
  h3.innerHTML = `${day} ${hour}:${min}`;

  
  
  function showPosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiKey = "765b9f49bb5f837e1b35ec83b522ea28";
    let point = "https://api.openweathermap.org/data/2.5/weather";
    let url = `${point}?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    axios.get(url).then(showtemperature);
  }
  function getCurrentlocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(showPosition);
  }
  
  let currentbutton = document.querySelector("#search-location");
  currentbutton.addEventListener("click", getCurrentlocation);
  
  
  
  search("Odessa");
  
