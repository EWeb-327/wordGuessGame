//User presses a key
// User guesses letters
document.onkeyup = function(event){
    var userGuess = event.key;
//if the letter is in the word it replaces that _
if (computerWord.includes(userGuess)) {

    console.log("The word includes: " + userGuess);
    // Guess count goes down with each new letter
    guesses --;
//if the letter is not in the word it shows on the screen in "guesses"
} else {
    console.log("Letters Guessed: \n" + userGuess)
// Guess count goes down with each new letter
    guesses --;
}
directionsText.textContent = "";
wordGenerator(computerWord)
}
//Computer selects random word
var zooAnimals = ["giraffe", "lion", "tiger", "hippo", "elephant", "zebra", "snake", "okapi", "camel", "penguin", "otter", "peacock", "rhino", "monkey", "panda", "sloth", "gorilla", "koala", "kangaroo", "wolf", "tortoise", "lemur", "cheetah", "alligator", "capybara", "meerkat"];
var computerWord = zooAnimals[Math.floor(Math.random() * zooAnimals.length)];
// _ for each letter in the random word shows on the screen
function wordGenerator(word) {
    var length = word.length
    var emptyString = ""
    console.log(length)

    for (var i = 0; i < length; i++) {
        emptyString = emptyString + "_ "
    }
    computerChoiceText.textContent = emptyString
}
//     2. If user guesses the word within 15 guesses they win
//         a. win count goes up by +1
//         b. guess count goes back to 15
//         c. computer chooeses new word

var zooAnimals = ["giraffe", "lion", "tiger", "hippo", "elephant", "zebra", "snake", "okapi", "camel", "penguin", "otter", "peacock", "rhino", "monkey", "panda", "sloth", "gorilla", "koala", "kangaroo", "wolf", "tortoise", "lemur", "cheetah", "alligator", "capybara", "meerkat"];
var computerWord = zooAnimals[Math.floor(Math.random() * zooAnimals.length)];
var wins = 0;
var guesses = 15;
var wordLetters = computerWord.split("")

var directionsText = document.getElementById("directions");
var userChoiceText = document.getElementById("user-letter");
var computerChoiceText = document.getElementById("random-word");
var guessCountText = document.getElementById("guess-count");
var winsText = document.getElementById("wins");

// function wordGenerator(word) {
//     var length = word.length
//     var emptyString = ""
//     console.log(length)

//     for (var i = 0; i < length; i++) {
//         emptyString = emptyString + "_ "
//     }
//     computerChoiceText.textContent = emptyString
// }

// // // function replaceBlank(correct) {
// // //     if (userGuess === )
// // // }

document.onkeyup = function(event){
    var userGuess = event.key;

    if (guesses === 0 || guesses === 15) {
        console.log(computerWord)
        // console.log(word.length)
    }


    if (computerWord.includes(userGuess)) {
       console.log("The word includes: " + userGuess);
       replace();
       guesses --;
    } else {
        console.log("Letters Guessed: \n" + userGuess)
        guesses --;
    }
    // directionsText.textContent = "";
    winsText.textContent = "Wins: " + wins
    guessCountText.textContent = "Guesses Left: " + guesses
    userChoiceText.textContent = "Letter Guessed: " + userGuess
    // wordGenerator(computerWord)
}


// var length = word.length
//     var emptyString = ""
//     console.log(length)
//returns an array that can be looped through
//look up array.prototype.splice
function replace() {
    document.onkeyup = function(event){
    var userGuess = event.key;
   for (var i = 0; i<computerWord.length; i++){
    
    if (userGuess === wordLetters[i]){
    wordLetters.splice([i],1,userGuess);
    computerChoiceText.textContent = wordLetters}
    console.log(wordLetters);
}}}


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
//key pressed function
document.onkeyup = function(event){
//var for userGuess
    var userGuess = event.key; //the key the user pressed
    directionsText.textContent = ""
    wordGenerator(computerWord)
    computerChoiceText.textContent = emptyString
    if(zooAnimals.includes(userGuess)){
        if (computerWord.includes(userGuess)) {
            userRightGuessText.textContent = userGuess
            guesses --;
        }
    } else {
        userWrongGuessText.textContent = userGuess
        guesses --;
    }
 
}


