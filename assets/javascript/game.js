$(document).ready(function() {
    var randomNumber = Math.floor(Math.random() * 101) + 1;
    $("#number-to-beat").html(randomNumber);
    console.log(randomNumber);

    var crystal1 = Math.floor(Math.random() * 10) + 1;
    var crystal2 = Math.floor(Math.random() * 10) + 1;
    var crystal3 = Math.floor(Math.random() * 10) + 1;
    var crystal4 = Math.floor(Math.random() * 10) + 1;

    var totalScore = 0;
    var wins = 0;
    var losses = 0;

    $("#total-wins").text(wins);
    $("#total-losses").text(losses);

function gameReset() {
    var randomNumber = Math.floor(Math.random() * 101) + 1;
    $("#number-to-beat").text(randomNumber);
    var crystal1 = Math.floor(Math.random() * 10) + 1;
    var crystal2 = Math.floor(Math.random() * 10) + 1;
    var crystal3 = Math.floor(Math.random() * 10) + 1;
    var crystal4 = Math.floor(Math.random() * 10) + 1;
    console.log(randomNumber);
    totalScore = 0;
    $("#total-score").text(totalScore);
}

function youLoose() {
    alert("You Lose!");
    losses++;
    $("#total-losses").text(losses);
    gameReset();

}

function youWin() {
    alert("You Won!");
    wins++;
    $("#total-wins").text(wins);
    gameReset();
}

$("#crystal-image-1").on("click", function() { totalScore = totalScore + crystal1; 
    $("#total-score").text(totalScore);
    console.log(totalScore);
    if(totalScore == randomNumber) {
         youWin();
    } else if (totalScore > randomNumber) { 
         youLoose();

    }
});

$("#crystal-image-2").on("click", function() { totalScore = totalScore + crystal2;
    $("#total-score").text(totalScore);
    console.log(totalScore);
    if(totalScore == randomNumber) {
         youWin();
    } else if (totalScore > randomNumber) { 
         youLoose();

    }
});

$("#crystal-image-3").on("click", function() { totalScore = totalScore + crystal3;
    $("#total-score").text(totalScore);
    console.log(totalScore);
    if(totalScore == randomNumber) {
        youWin();
    } else if (totalScore > randomNumber) { 
        youLoose();

    }
});

$("#crystal-image-4").on("click", function() { totalScore = totalScore + crystal4;
    $("#total-score").text(totalScore);
    console.log(totalScore);
    if(totalScore == randomNumber) {
         youWin();
    } else if (totalScore > randomNumber) { 
        youLoose();

    }
});



});












 
