//var to hold array of computer choices
var zooAnimals = ["giraffe", "lion", "tiger", "hippo", "elephant", "zebra", "snake", "okapi", "camel", "penguin", "otter", "peacock", "rhino", "monkey", "panda", "sloth", "gorilla", "koala", "kangaroo", "wolf", "tortoise", "lemur", "cheetah", "alligator", "capybara", "meerkat"];
//var for computerRandomWord
var computerWord = zooAnimals[Math.floor(Math.random() * zooAnimals.length)];
//var to split computerWord
var wordLetters = computerWord.split("")
//var for guesses, wins
var wins = 0;
var guesses = 15;
//vars for quick references
var directionsText = document.getElementById("directions");
var userWrongGuessText = document.getElementById("letter-guessed");
var userRightGuessText = document.getElementById("current-word");
var computerChoiceText = document.getElementById("random-word");
var guessesText = document.getElementById("guess-count")
var winsText = document.getElementById("wins")

//key pressed function
document.onkeyup = function(event){
//var for userGuess
    var userGuess = event.key; //the key the user pressed
    //wordGenerator function
    function wordGenerator(word) {
        var length = word.length
        var emptyString = ""
        console.log(length)
        for (var i = 0; i < length; i++) {
            emptyString = emptyString + "_ "
        }
        computerChoiceText.textContent = emptyString
    }
    //what happens when space is pressed
    console.log(computerWord)
    directionsText.textContent = ""
    wordGenerator(computerWord)
    //what happens with each userGuess
    if (computerWord.includes(userGuess)) {
            userRightGuessText.textContent = userGuess
            guesses --;
    } else {
        userWrongGuessText.textContent = userGuess 
        guesses --;
    }
 
}
