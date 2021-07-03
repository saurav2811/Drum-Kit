var n = document.querySelectorAll(".drum").length;

for (var i = 0; i < n; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttoninnerHTML = this.innerHTML;
    makesound(buttoninnerHTML);
  });
}

for (var i = 0; i < n; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("keydown", function(event) {
    var key = event.key;
    makesound(key);
  });

}


function makesound(key) {
  switch (key) {
    case 'd':
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case 'f':
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case 'j':
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case 'k':
      var ride = new Audio("sounds/ride.mp3");
      ride.play();
      break;
    case 'x':
      var ohh = new Audio("sounds/OHH.mp3");
      ohh.play();
      break;
    case 'c':
      var chh = new Audio("sounds/CHH.mp3");
      chh.play();
      break;
    case 'v':
      var bass = new Audio("sounds/kick-bass.wav");
      bass.play();
      break;
    case 'b':
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case 'n':
      var bass = new Audio("sounds/kick-bass.wav");
      bass.play();
      break;
    case 'm':
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    default:
      console.log(key);

  }
}
