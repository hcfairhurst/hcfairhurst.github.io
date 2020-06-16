/* this is the navigation drop menu in the small view */
function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
  }
  /* this is the current date in the footer*/
  try {
    const options = {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    };
    document.getElementById('todaysDate').textContent = new Date().toLocaleDateString('en-US', options);
  } catch (e) {
    alert('Error with code or your browser does not support Locale');
  }
  /* this changes the displayed number on the slider*/
  function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}
  /*this is the pancake banner*/
  function showPancake() {
    var date = new Date();
    var dayOfWeek = date.getDay();
    
    if (dayOfWeek == 5) {
      var pancake = document.getElementById("pancake");
      pancake.style.display = "block";
    }
  }
  showPancake()

  /*this is the json fetch*/
  const  requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
  fetch(requestURL)
  .then(function (response){
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const towns = jsonObject['towns'];

    
for (let i = 0; i <= 2; i++){
  let info = document.createElement('div');
  let h2 = document.createElement('h2');
  let motto = document.createElement('h4');
  let year = document.createElement('p');
  let pop = document.createElement('p');
  let rain = document.createElement('p');
 

h2.textContent = towns[i].name;
motto.textContent = towns[i].motto;
year.textContent = 'Year Founded: ' + towns[i].yearFounded;
pop.textContent = 'Current Population: ' + towns[i].currentPopulation;
rain.textContent = 'Average Rainfall: ' + towns[i].averageRainfall;



info.appendChild(h2);
info.appendChild(motto);
info.appendChild(year);
info.appendChild(pop);
info.appendChild(rain);

document.querySelector('section.data').appendChild(info);
}


  })