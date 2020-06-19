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
const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const towns = jsonObject['towns'];

    for (let i = 0; i < towns.length; i++) {
      let town = towns[i]
      let townNames = ["Fish Haven", "Preston", "Soda Springs"]
      if (townNames.includes(town.name)) {

        let section = document.createElement('section');
        section.classList.add('town');
        // info div
        let info = document.createElement('div');
        info.classList.add('info');
        let h2 = document.createElement('h2');
        let motto = document.createElement('h4');
        let year = document.createElement('p');
        let pop = document.createElement('p');
        let rain = document.createElement('p');
        h2.textContent = town.name;
        motto.textContent = 'Motto: ' + town.motto;
        year.textContent = 'Year Founded: ' + town.yearFounded;
        pop.textContent = 'Current Population: ' + town.currentPopulation;
        rain.textContent = 'Average Rainfall: ' + town.averageRainfall;
        info.appendChild(h2);
        info.appendChild(motto);
        info.appendChild(year);
        info.appendChild(pop);
        info.appendChild(rain);
        // picture div
        let picture = document.createElement('div');
        picture.classList.add('picture');
        let img = document.createElement('img');
        img.setAttribute('src', "images9/" + town.photo);
        picture.appendChild(img);
        let alt = document.createElement('alt');
        alt.setAttribute('alt', town.name);
        picture.appendChild(alt);
        // append info and picture to section
        section.appendChild(picture)
        section.appendChild(info)


        document.getElementById('towns').appendChild(section);
      }


    }


  })
/*this is the font web loader*/
WebFont.load({
  google: {
      families: [
          'Open Sans'
  ]
}
});