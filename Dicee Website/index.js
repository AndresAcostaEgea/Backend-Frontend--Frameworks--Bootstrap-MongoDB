var randomNumber1 = Math.floor((Math.random()*6)+1)
var attributeName = "images/dice"+randomNumber1+".png"
var randomNumber2 = Math.floor((Math.random()*6)+1)
var attributeName2 = "images/dice"+randomNumber2+".png"


document.querySelector(".img1").setAttribute("src", attributeName);
document.querySelector(".img2").setAttribute("src", attributeName2);

if (randomNumber1>randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Won!";
} else if (randomNumber2>randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 Won!";
} else if (randomNumber2===randomNumber1) {
  document.querySelector("h1").innerHTML = "It is a tie!";
}
