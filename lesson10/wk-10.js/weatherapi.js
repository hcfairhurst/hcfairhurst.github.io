const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=3857ba2acf06e72d887f7365beccbbad";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {/*this is the variable for the json data we requested*/
    console.log(jsObject);/* this check to see if the json data is being called*/
    document.getElementById('current-temp').textContent = jsObject.main.temp;
    /* we created a span with the id of current-temp, we are assigning the json data 
     main.temp to that Id and placing it in the HTML span*/
     const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
     const desc = jsObject.weather[0].description;  // note how we reference the weather array
     document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
     document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
     document.getElementById('icon').setAttribute('alt', desc);
  });