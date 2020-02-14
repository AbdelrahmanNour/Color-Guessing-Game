var i;
var colors =[];
var pickedColor;
var numSquaers = 6;
var gameLevel = "hard";
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var header = document.querySelector("h1");
var resetButton = document.querySelector("button");
var modeButton = document.querySelectorAll(".mode");

init();

function init() {
  setUpModeButtons();
  setUpSquaresColors();
  reset();
}

function setUpModeButtons() {
  for (i = 0; i < modeButton.length; i++) {
    modeButton[i].addEventListener("click", function() {
      modeButton[0].classList.remove("selected");
      modeButton[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? (numSquaers = 3) : (numSquaers = 6);
      reset();
    });
  }
}


function setUpSquaresColors(){

  for (i = 0; i < squares.length; i++) {
    //add click listener to squares
    squares[i].addEventListener("click", function() {
      // grap color of clicked square
      var clickedColor = this.style.backgroundColor;
      // compare color to picked Color
      if (clickedColor === pickedColor) {
        message.textContent = "Correct";
        changeColors(pickedColor);
        header.style.backgroundColor = pickedColor;
        resetButton.textContent = "Play Again!";
      } else {
        message.textContent = "Try again";
        this.style.backgroundColor = "#232323";
      }
    });
  }

}

function reset() {
  // generate new colors
  colors = generateRandomColor(numSquaers);
  // pic new correct color
  pickedColor = pickColor();
  // change display to the correct new color
  colorDisplay.textContent = pickedColor;
  // reset header background color
  header.style.backgroundColor = "steelblue";
  // change stripe content
  resetButton.textContent = "New Colors";
  message.textContent = "";
  // change square colors
  for (i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      //add initial colors to squares
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
}


resetButton.addEventListener("click", function() {
  reset();
});


function changeColors(color) {
  // add the correct color to all squares
  for (i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColor(num) {
  // array to save random values
  var arr = [];
  //add colors to the array
  for (i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  // return array value
  return arr;
}

function randomColor() {
  // generate random red color
  var r = Math.floor(Math.random() * 256);
  // generate random green color
  var g = Math.floor(Math.random() * 256);
  // generate random blue color
  var b = Math.floor(Math.random() * 256);
  //return random color
  return ("rgb(" + r + ", " + g + ", " + b + ")");
}
