function toggleMenu() {
  document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

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

function showPancake() {
  var date = new Date();
  var dayOfWeek = date.getDay();

  if (dayOfWeek == 5) {
    var pancake = document.getElementById("pancake");
    pancake.style.display = "block";
  }
}

showPancake()