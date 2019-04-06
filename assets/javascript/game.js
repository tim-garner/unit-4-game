 // Created a simple "alert" to get our bearings.
 alert("Hola");

//
 // Here we created an on-click event that responds to button clicks of the crystal image.
 $(".gem-image").on("click", function() {

  // Clicking the button triggers an alert message.
  alert("You clicked a gem!");

});



// Now need to create counter to track total.
var counter = 0;
$(".gem-image").on("click", function() {
  counter += 1;

  alert("Clicking this crystal keep on going " + counter + " times!");
});

// Lets increase counter by 10. 
counter +=10;

alert("your new score is: + Counter");

var targetNumber = 40;

$("#number-to-guess").on("click", function() {
  counter += 10;

  alert("your new score: " +counter); 
  if (counter === targetNumber) {
    alert("You win!");
  }

  else if (counter >= targetNumber) {
    alert("You lose!!");
  }

});
var counter = 0;

//Array for 4 options
var numberOptions = [19, 20, 21, 22,23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120]

for (var i = 0; i <numberOptions.length; i++) {
  
}
if (counter === targetNumber) {
  wins++;
}

else if (counter > targetNumber) {
  lose++;
}
