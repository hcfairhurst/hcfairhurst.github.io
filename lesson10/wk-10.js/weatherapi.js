const apiURL = "http://api.openweathermap.org/data/2.5/weather?id={5604473}&appid={e94afd1d17950cda18093ae5de0e3019}";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });