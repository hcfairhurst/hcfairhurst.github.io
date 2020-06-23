const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=3857ba2acf06e72d887f7365beccbbad";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {/*this is the variable for the json data we requested*/
    console.log(jsObject);/* this check to see if the json data is being called*/
    document.getElementById('current').textContent = "Currently : " + jsObject.weather.main;
    document.getElementById('temp').textContent = "High : " + jsObject.main.temp;
    document.getElementById('humid').textContent = "Humidity : " + jsObject.main.humidity + "%";
    document.getElementById('wind').textContent = jsObject.wind.speed;
    /* we created a span with the id of current-temp, we are assigning the json data 
     main.temp to that Id and placing it in the HTML span*/
     
  });
  const dayForecastURL = "https://pro.openweathermap.org/data/2.5/forecast/hourly?id=5604473&appid=3857ba2acf06e72d887f7365beccbbad";
  fetch(dayForecastURL)
  .then((response) => response.json())
  .then((jsObject) => {
      console.log(jsObject);
      
  });