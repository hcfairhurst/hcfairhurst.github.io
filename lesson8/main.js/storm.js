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