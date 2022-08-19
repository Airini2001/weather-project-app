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
  
    let temperature = Math.round(response.data.main.temp);
    let tempnow = document.querySelector("#temp");
    tempnow.innerHTML = `${temperature}°C`;
  
    let inputcity = response.data.name;
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = inputcity;
  }
  
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
  
  function tempc(event) {
    event.preventDefault();
  
    let templink = document.querySelector("#temp");
    templink.innerHTML = `66`;
  }
  let farinh = document.querySelector("#fahrenheit-link");
  farinh.addEventListener("click", tempc);
  
  function tempf(event) {
    event.preventDefault();
  
    let templink = document.querySelector("#temp");
    templink.innerHTML = `19`;
  }
  let cels = document.querySelector("#celsius-link");
  cels.addEventListener("click", tempf);
  
  function showPosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiKey = "765b9f49bb5f837e1b35ec83b522ea28";
    let point = "https://api.openweathermap.org/data/2.5/weather";
    let url = `${point}?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    axios.get(url).then(showWeather);
  }
  function getCurrentlocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(showPosition);
  }
  
  let currentbutton = document.querySelector("#search-location");
  currentbutton.addEventListener("click", getCurrentlocation);
  
  function showWeather(response) {
    console.log(response);
    let localcity = response.data.name;
    let elementcity = document.querySelector("#city");
    elementcity.innerHTML = localcity;
  
    let temperature = Math.round(response.data.main.temp);
    let templocation = document.querySelector("#temp");
    templocation.innerHTML = `${temperature}°C`;
  }
  
