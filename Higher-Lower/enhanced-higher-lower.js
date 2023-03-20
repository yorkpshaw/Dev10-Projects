let correctGuess = Math.floor(Math.random() * 20) + 1
console.log(correctGuess)

function guessNumber() {

    let message = document.getElementById("message");
    let guess = Number(document.getElementById("guess").value)

    if (guess === correctGuess) {
        message.innerHTML = "You got it!"
    } else if (guess > correctGuess) {
        message.innerHTML = "No, try a lower number."
    } else {
        message.innerHTML = "No, try a higher number."
    }


}

/*
PROMPT FOR MAX NUMBER
1. Prompt the user for a max number.
2. Validate the user input - if it is not a positive integer, keep prompting until there is a valid input.
3. Math.round() to round the number.
4. Application selects a number between 1 and N (N is user input).
*/

/*
VALIDATE THE GUESS
1. If the guess is NaN, display "That  is not a number!"
2. If the guess is out of range (below 1 to over N), display "That number is not in range, try again."
*/

/*
TRACK THE GUESSES
1. Initialize a results array to push the guesses into.
2. When the user guesses correctly, return the number of guesses and a list of the guesses to this message:
    "You got it! It took you {count} tries and your guesses were x, y, z." Invalid guesses cannot count.
3. Must use the length property to count the number of guesses.
*/

/*
PREVENT DUPLICATE GUESSES
1. Check the results array to make sure the current guess does not already exist.
2. If the guess does exist, display a message that a number has already been guessed.
*/
