// Funktion som fällern ut navigationslänkarna i mobil layout

var hamburgaren = document.querySelector(".fa-bars")
console.log(hamburgaren)
var meny = document.querySelector(".ham-meny")
console.log(meny);
var check = true;

var siffra = 0;
hamburgaren.addEventListener('click', ()=>{
siffra++;
if (siffra %2 == 1){
      meny.style.display = ("block")
} else {
      meny.style.display = ("none")
}
})


// navigationen i header
var linkContainer = document.querySelectorAll("nav-bar");

// alla a taggar i navigationen
var links = linkContainer.getElementsByClassName("nav-links");

// Loopar igenom alla a taggar och lägger till active class till den klickade länken
for (var i = 0; i < links.length; i++) {
      links[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
      });
}