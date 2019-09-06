var zooAnimals = ["Giraffe", "Lion", "Tiger", "Hippo", "Elephant", "Zebra", "Polar Bear", "Okapi", "Camel", "Penguin", "Otter", "Peacock", "Rhino", "Monkey", "Panda", "Sloth", "Gorilla", "Koala", "Kangaroo", "Wolf", "Tortoise", "Lemur", "Cheetah", "Alligator", "Capybara", "Meerkat"];
var computerWord = zooAnimals[Math.floor(Math.random() * zooAnimals.length)];

var wins = 0;
var guesses = 15;

var directionsText = document.getElementById("directions");
var userChoiceText = document.getElementById("user-letter");
var computerChoiceText = document.getElementById("random-word");
var guessCountText = document.getElementById("guess-count");
var winsText = document.getElementById("wins");


document.onkeyup = function(event){
    var userGuess = event.key;

    if (guesses === 0 || guesses === 15) {
        console.log(computerWord)
        // console.log(word.length)
    }


    if (computerWord.includes(userGuess)) {
       console.log("The word includes: " + userGuess);
       guesses --;
    } else {
        console.log("Letters Guessed: \n" + userGuess)
        guesses --;
    }
    directionsText.textContent = "";
    winsText.textContent = "Wins: " + wins
    guessCountText.textContent = "Guesses Left: " + guesses
    console.log(computerWord)
}
    
