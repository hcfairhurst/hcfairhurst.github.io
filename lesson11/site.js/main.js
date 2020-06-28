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
/* this changes the displayed number on the form slider*/
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


/*this is the font web loader*/
WebFont.load({
  google: {
      families: [
          'Open Sans'
  ]
}
});