//var to hold array of computer choices
var zooAnimals = ["giraffe", "lion", "tiger", "hippo", "elephant", "zebra", "snake", "okapi", "camel", "penguin", "otter", "peacock", "rhino", "monkey", "panda", "sloth", "gorilla", "koala", "kangaroo", "wolf", "tortoise", "lemur", "cheetah", "alligator", "capybara", "meerkat"];
//var for computerRandomWord
var computerWord = zooAnimals[Math.floor(Math.random() * zooAnimals.length)];
//var to split computerWord
var wordLetters = computerWord.split("")
for( var i = 0; i<wordLetters.length; i++){
var letter = wordLetters[i]}
//var to show and hide elements
var showLetter = function() {
    document.getElementById("element").style.display = 'block';
};
var hideLetter = function () {
    document.getElementById("element").style.display = 'none';
};
var showUnderline = function() {
    document.getElementById("element").style.display = 'block';
}
var hideUnderline = function() {
    document.getElementById("element").style.display = 'none';
}
//var for guesses, wins, previous guess
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
    
    // function replace(){
    //     var str = computerWord
    //     var pos =str.search(userGuess)
    //     for (var l = 0; l<computerWord.length; l++){
    //     computerWord[l].replace(userGuess)
    // }}
    //function for putting random word page
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
    guessesText.textContent = guesses
    wordGenerator(computerWord)
    showUnderline();
    hideLetter();

    //what happens with each userGuess
    if (computerWord.includes(userGuess)) {
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