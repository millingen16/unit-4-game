//This code does not work.
//I wrote it out the best I could.

$(document).ready()

var displayedNumber = "";
var wins = 0;
var losses =0;
var totalNumber = 0;
var images = "";


//still having issues with math.random.. shows undefined.
var randomDisplayedNumber = math.floor(math.random() * 99) + 1;
 console.log(randomDisplayedNumber);

$(".displayedNumber").text(randomDisplayedNumber);


// I think this is the code for clicking on an item.

$(".crystalImages").on("click", function() {
    var imageCrystal = userInput;

    if (userInput === randomDisplayedNumber) {
        alert("You Win!");
    }

    else (userInput == randomDisplayedNumber) {
        alert("You Lose!");
    }
});


//Also creating a random number for the crystal

var crystal1 = math.floor(math.random() * 10 + 1);
var crystal2 = math.floor(math.random() * 10 + 1);
var crystal3 = math.floor(math.random() * 10 + 1);
var crystal4 = math.floor(math.random() * 10 + 1);

// Not really sure on how to put it all together.

// There should some functions some where to be decleared and called. 


 
