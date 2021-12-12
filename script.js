function hamburgerFunction() {
      var hamburger = document.getElementById("nav-bar");
      if (hamburger.style.display === "block") {
      hamburger.style.display = "none";
      } else {
      hamburger.style.display = "block";
      }
}