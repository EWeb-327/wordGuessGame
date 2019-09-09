var zooAnimals = ["elephant", "penguin", "otter", "peacock", "parrot", "chimpanzee", "panda", "gorilla", "koala", "jackal", "turtle", "grizzly", "jaguar", "hippo", "antelope", "meerkat"];
var computerWord = zooAnimals[Math.floor(Math.random() * zooAnimals.length)];
var wordLetters = computerWord.split("")
for (var i = 0; i < wordLetters.length; i++) {
    var letter = wordLetters[i]
}
var emptyString = ""
console.log(length)
for (var i = 0; i < length; i++) {
    emptyString = emptyString + "_ "
}

var wins = 0;
var guesses = 15;
var correctGuesses = [];
var wrongGuesses = [];
var keydown = false
var directionsText = document.getElementById("directions");
var userWrongGuessText = document.getElementById("letter-guessed");
var computerChoiceText = document.getElementById("random-word");
var computerSpaceText = document.getElementById("underline")
var guessesText = document.getElementById("guess-count")
var winsText = document.getElementById("wins")
var letter1 = document.getElementById("letter1")
var letter2 = document.getElementById("letter2")
var letter3 = document.getElementById("letter3")
var letter4 = document.getElementById("letter4")
var letter5 = document.getElementById("letter5")
var letter6 = document.getElementById("letter6")
var letter7 = document.getElementById("letter7")
var letter8 = document.getElementById("letter8")
var letter9 = document.getElementById("letter9")
var letter10 = document.getElementById("letter10")

function wordGenerator(word) {
    var wordLetters = computerWord.split("")
    for (var i = 0; i < wordLetters.length; i++) {
        var letter = wordLetters[i]
    }
    console.log(wordLetters)
    var length = computerWord.length
    var emptyString = ""
    console.log(length)
    for (var i = 0; i < length; i++) {
        emptyString = emptyString + "_ "
    }
    computerChoiceText.textContent = emptyString
}

function addLetter(input) {
    if (correctGuesses.indexOf(input) === -1){
    correctGuesses.push(input);
    console.log(correctGuesses)
    guesses --;
    }
}
function addWrongLetter(input) {
    if (wrongGuesses.indexOf(input) === -1){
    wrongGuesses.push(input);
    guesses --;
    console.log(wrongGuesses)
    }
}
function restart() {
    computerWord = zooAnimals[Math.floor(Math.random() * zooAnimals.length)]
    wordGenerator(computerWord)
    guesses = 15
    guessesText.textContent = guesses
    emptyString = ""
    computerChoiceText.textContent = ""
    userWrongGuessText.textContent = ""
    letter1.textContent = " ";
    letter2.textContent = " ";
    letter3.textContent = " ";
    letter4.textContent = " ";
    letter5.textContent = " ";
    letter6.textContent = " ";
    letter7.textContent = " ";
    letter8.textContent = " ";
    letter9.textContent = " ";
    letter10.textContent = " ";
    correctGuesses= []
    wrongGuesses= []
    directionsText.textContent = "Press Space to play again!"
    wins ++;
}
function loseRestart() {
    computerWord = zooAnimals[Math.floor(Math.random() * zooAnimals.length)]
    wordGenerator(computerWord)
    guesses = 15
    guessesText.textContent = guesses
    emptyString = ""
    computerChoiceText.textContent = ""
    userWrongGuessText.textContent = ""
    letter1.textContent = " ";
    letter2.textContent = " ";
    letter3.textContent = " ";
    letter4.textContent = " ";
    letter5.textContent = " ";
    letter6.textContent = " ";
    letter7.textContent = " ";
    letter8.textContent = " ";
    letter9.textContent = " ";
    letter10.textContent = " ";
    correctGuesses= []
    wrongGuesses= []
    directionsText.textContent = "Press Space to play again!"
}


document.onkeyup = function game(event) {
    directionsText.textContent = ""
    winsText.textContent = wins
    guessesText.textContent = guesses
    //var for userGuess
    var userGuess = event.key;//the key the user pressed
    console.log(computerWord)
    wordGenerator(computerWord)

    function showLetter() {
        var wordLetters = computerWord.split("")
        for (var i = 0; i < wordLetters.length; i++) {
            if (userGuess === wordLetters[0]) {
                letter1.textContent = userGuess;
            }
            if (userGuess === wordLetters[1]) {
                letter2.textContent = userGuess
            }
            if (userGuess === wordLetters[2]) {
                letter3.textContent = userGuess
            }
            if (userGuess === wordLetters[3]) {
                letter4.textContent = userGuess
            }
            if (userGuess === wordLetters[4]) {
                letter5.textContent = userGuess
            }
            if (userGuess === wordLetters[5]) {
                letter6.textContent = userGuess
            }
            if (userGuess === wordLetters[6]) {
                letter7.textContent = userGuess
            }
            if (userGuess === wordLetters[7]) {
                letter8.textContent = userGuess
            }
            if (userGuess === wordLetters[8]) {
                letter9.textContent = userGuess
            }
            if (userGuess === wordLetters[9]) {
                letter10.textContent = userGuess
            }
            else {
            }
        }
    }

    if (wordLetters.includes(userGuess) && keydown === false) {
        addLetter(userGuess);
        showLetter();
    } else {
        var lettersNot = document.createElement("div");
        var incorrectLetter = document.createTextNode(userGuess);
        lettersNot.appendChild(incorrectLetter);
        document.getElementById("letter-guessed").appendChild(lettersNot);
        addWrongLetter(userGuess);
    }
    if (correctGuesses.length + 1 === wordLetters.length) {
        showLetter();
        alert("You guessed right! The animal is " + computerWord)
        restart();
    }
    if (guesses === -1) {
        alert("You're out of guesses...")
        var playAgain = confirm("Play Again?");
        if (playAgain) {
            loseRestart();
        } else {
            alert("Thanks for playing!");
        
        }
    }
}




