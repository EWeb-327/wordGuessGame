var zooAnimals = ["elephant", "giraffe", "penguin", "otter", "peacock", "parrot", "chimpanzee", "panda", "gorilla", "koala", "jackal", "turtle", "grizzly", "jaguar", "hippo", "antelope", "meerkat"];
var computerWord = zooAnimals[Math.floor(Math.random() * zooAnimals.length)];
var wordLetters = computerWord.split("")
var wins = 0;
var guesses = 15;
var correctGuesses = [];
var wrongGuesses = [];
var blanks = []
var keydown = false
var directionsText = document.getElementById("directions");
var userWrongGuessText = document.getElementById("letter-guessed");
var computerChoiceText = document.getElementById("random-word");
for (var i = 0; i < wordLetters.length; i++) {
    blanks.push("_") 
    }
    computerChoiceText.textContent = blanks.join(" ")
var computerSpaceText = document.getElementById("underline")
var guessesText = document.getElementById("guess-count")
var winsText = document.getElementById("wins")

function addLetter(input) {
    if (correctGuesses.indexOf(input) === -1){
    correctGuesses.push(input);
    console.log(correctGuesses)
    guesses --;
    } else {
        return;
    }
}
function addWrongLetter(input) {
    if (wrongGuesses.indexOf(input) === -1){
    wrongGuesses.push(input);
    guesses --;
    console.log(wrongGuesses)
    } else{
        return;
    }
}
function youWin(){
    wins++;
   $("#random-word").text("You win! The word was " + computerWord)
    setTimeout(restart, 3000);
}
function restart() {
    computerChoiceText.textContent = ""
    blanks = []
    computerWord = zooAnimals[Math.floor(Math.random() * zooAnimals.length)]    
    wordLetters = computerWord.split("")
    for (var i = 0; i < wordLetters.length; i++) {
        blanks.push("_") 
        }
        computerChoiceText.textContent = blanks.join(" ")
    guesses = 15
    guessesText.textContent = guesses
    correctGuesses= []
    console.log(correctGuesses)
    wrongGuesses= []
    console.log(wrongGuesses)
    userWrongGuessText.textContent = ""
    // showLetter()
    directionsText.textContent = "Press Space to play again!"
}
document.onkeyup = function game(event) {
    directionsText.textContent = ""
    winsText.textContent = wins
    guessesText.textContent = guesses
    var userGuess = event.key;//the key the user pressed
    console.log(computerWord)
    // wordGenerator(computerWord)
    showLetter()
    
    function showLetter() {
        
        var wordLetters = computerWord.split("")
        for (var i = 0; i < wordLetters.length; i++) {
            if (userGuess === wordLetters[i]){
                blanks[i] = userGuess;
            }
        } 
        computerChoiceText.textContent = blanks.join(" ")
    }

    if (wordLetters.includes(userGuess)) {
        addLetter(userGuess);
        showLetter();
    } else {
        addWrongLetter(userGuess);
        userWrongGuessText.textContent = wrongGuesses
    }
    if (correctGuesses.length + 1 === wordLetters.length) {
        computerChoiceText.textContent = wordLetters
        showLetter();
        youWin();
        
    }
    if (guesses === -1) {
        alert("You're out of guesses...")
        var playAgain = confirm("Play Again?");
        if (playAgain) {
            restart();
        } else {
            alert("Thanks for playing!");
        
        }
    }
}




