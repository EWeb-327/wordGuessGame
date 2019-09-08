var zooAnimals = ["elephant", "penguin", "otter", "peacock", "rhinoceros", "chimpanzee", "panda", "gorilla", "koala", "jackal", "turtle", "galago", "jaguar", "hippo", "antelope", "meerkat"];
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

function addLetter(input){
    correctGuesses.push(input);
    console.log(correctGuesses)
}

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

document.onkeyup = function game(event) {
    directionsText.textContent = ""
    winsText.textContent = wins
    guessesText.textContent = guesses
    //var for userGuess
    var userGuess = event.key; //the key the user pressed 

    console.log(computerWord)

    function wordGenerator(word) {
        var wordLetters = computerWord.split("")
        for( var i = 0; i<wordLetters.length; i++){
        var letter = wordLetters[i]}
        console.log(wordLetters)
        var length = word.length
        var emptyString = ""
        console.log(length)
        for (var i = 0; i < length; i++) {
            emptyString = emptyString + "_ "
        }
        computerChoiceText.textContent = emptyString
    }
    

    wordGenerator(computerWord)

   function showLetter() {
    var wordLetters = computerWord.split("")
    for( var i = 0; i<wordLetters.length; i++){
        if (userGuess === wordLetters[0]) {
        letter1.textContent=userGuess;
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
     }}
    // var hideLetter = function () {
    //     document.getElementById("random-word").style.display = 'none';
    //     };
    // var showUnderline = function() {
    //     document.getElementById("underline").style.display = 'block';
    //     };
    // hideLetter();

    if (wordLetters.includes(userGuess)) {
        // var lettersIn = document.createElement("div");
        // var correctLetter = document.createTextNode (userGuess);
        // lettersIn.appendChild(correctLetter);
        // document.getElementById("current-word").appendChild(lettersIn);
        // hideUnderline();
        addLetter(userGuess);
        showLetter();
        guesses --;
    } else {
        var lettersNot = document.createElement("div");
        var incorrectLetter = document.createTextNode (userGuess);
        lettersNot.appendChild(incorrectLetter);
        document.getElementById("letter-guessed").appendChild(lettersNot);
        guesses --;
      }
    if (correctGuesses.length === wordLetters.length-1){
        wins++;
        alert("You WON!");
        var playAgain = confirm ("Play Again?")
        if (playAgain) {
           game(event);
           return;
        } else {
            alert("Thanks for playing!")
        }  
    } if (guesses === -1){
        alert("You're out of guesses...")
        var playAgain = confirm ("Play Again?")
        if (playAgain) {
           game(event);
           return;
        } else {
            alert("Thanks for playing!")
        }  
    }
    }


