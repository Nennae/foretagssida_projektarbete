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