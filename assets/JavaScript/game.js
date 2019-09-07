//var to hold array of computer choices
var zooAnimals = ["giraffe", "lion", "tiger", "hippo", "elephant", "zebra", "snake", "okapi", "camel", "penguin", "otter", "peacock", "rhino", "monkey", "panda", "sloth", "gorilla", "koala", "kangaroo", "wolf", "tortoise", "lemur", "cheetah", "alligator", "capybara", "meerkat"];
//var for computerRandomWord
var computerWord = zooAnimals[Math.floor(Math.random() * zooAnimals.length)];
//var to split computerWord
var wordLetters = computerWord.split("")
for( var i = 0; i<wordLetters.length; i++){
var letter = wordLetters[i]}
var emptyString = ""
        console.log(length)
        for (var i = 0; i < length; i++) {
            emptyString = emptyString + "_ "
        }
//var to show and hide elements

//var for guesses, wins, previous guess
var wins = 0;
var guesses = 15;
//vars for quick references
var directionsText = document.getElementById("directions");
var userWrongGuessText = document.getElementById("letter-guessed");
var userRightGuessText = document.getElementById("current-word");
var computerChoiceText = document.getElementById("random-word");
var computerSpaceText = document.getElementById("underline")
var guessesText = document.getElementById("guess-count")
var winsText = document.getElementById("wins")

//key pressed function
document.onkeyup = function(event){

//var for userGuess
    var userGuess = event.key; //the key the user pressed 
    
    var showLetter = function() {
        for( var i = 0; i<wordLetters.length; i++){
            wordLetters[i] = userGuess}
        document.getElementById("random-word").style.display = 'block';
    };
    var hideLetter = function () {
        document.getElementById("random-word").style.display = 'none';
    };
    var showUnderline = function() {
       document.getElementById("underline").style.display = 'block';
    };
    var hideUnderline = function() {
        document.getElementById("underline").style.display = 'none';
    };
    //function for putting random word page
    function wordGenerator(word) {
        var wordLetters = computerWord.split("")
        for( var i = 0; i<wordLetters.length; i++){
        var letter = wordLetters[i]}
        computerChoiceText.textContent = wordLetters
        var length = word.length
        var emptyString = ""
        console.log(length)
        for (var i = 0; i < length; i++) {
            emptyString = emptyString + "_ "
        }
        computerSpaceText.textContent= emptyString
    }
   //what happens when space is pressed
    console.log(computerWord)
    directionsText.textContent = ""
    guessesText.textContent = guesses
    wordGenerator(computerWord)
    showUnderline();
    hideLetter();

    //what happens with each userGuess
    if (wordLetters.includes(userGuess)) {
            var lettersIn = document.createElement("div");
            var correctLetter = document.createTextNode (userGuess);
            lettersIn.appendChild(correctLetter);
            document.getElementById("current-word").appendChild(lettersIn);
            hideUnderline();
            showLetter();
            guesses --;
        } else {
        var lettersNot = document.createElement("div");
        var incorrectLetter = document.createTextNode (userGuess);
            lettersNot.appendChild(incorrectLetter);
            document.getElementById("letter-guessed").appendChild(lettersNot);
            guesses --;
              }
            }