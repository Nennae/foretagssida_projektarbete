// Funktion för hamburger menyn

function hamburgerFunction() {
      var hamburger = document.getElementsByClassName("nav-bar");
      if (hamburger.style.display === "block") {
      hamburger.style.display = "none";
      } else {
      hamburger.style.display = "block";
      }
}