var audio1 = new Audio('sounds/tom-1.mp3');
var audio2 = new Audio('sounds/tom-2.mp3');
var audio3 = new Audio('sounds/tom-3.mp3');
var audio4 = new Audio('sounds/tom-4.mp3');
var audio5 = new Audio('sounds/crash.mp3');
var audio6 = new Audio('sounds/kick-bass.mp3');
var audio7 = new Audio('sounds/snare.mp3');

// Click Listener

var lengthNum = document.querySelectorAll(".drum").length;

for (i = 0; i < lengthNum; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var clickEvent = this.innerHTML;

    soundKey(clickEvent);
    actionButton(clickEvent);

  });
}

// Keyboard Listner

document.addEventListener("keydown", function(event) {
  soundKey(event.key);
  actionButton(event.key);
});

// Sound executer

function soundKey(key) {

  switch (key) {
    case "w":
      audio1.play();
      break;
    case "a":
      audio2.play();
      break;
    case "s":
      audio3.play();
      break;
    case "d":
      audio4.play();
      break;
    case "j":
      audio5.play();
      break;
    case "k":
      audio6.play();
      break;
    case "l":
      audio7.play();
      break;
    default:
      console.log(option);
    }
}

function actionButton(keyOne){
  var alterButton = document.querySelector("." + keyOne);
  alterButton.classList.add("pressed");

  setTimeout(function(){
    alterButton.classList.remove("pressed");
  }, 100);


}
