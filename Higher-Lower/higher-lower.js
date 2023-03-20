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
Generate a random number between 1-20 that is hidden
If the input is correct, display one of three messages
*/

/*
Create a webpage that simulates a number guessing game. On load, the page should generate a random number between 1 and 20.
The user will enter a guess into a text input and click a button to submit the guess.

When submitted, one of the following messages should be displayed:

"You got it!" if the guess is right.
"No, try a higher number." if the guess is too low.
"No, try a lower number." if the guess is too high.
*/

/*
message.innerHTML = guess === correctGuess ?
"You got it!" : guess > correctGuess ?
"No, try a lower number." : "No, try a higher number.";
*/
