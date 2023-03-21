let input;
let guess;
let correctGuess;
let results = [];

window.onload = () => {
    do {
        input = Math.round(Number(prompt("Enter a maximum number:")));
        if (isNaN(input)) {
            alert("That is not a number! Please enter a number!");
        } else if (input <= 1) {
            alert("Invalid number. Please enter a positive integer greater than 1...but I guess a decimal works too.");
        }
    } while (isNaN(input) || input <= 1);

    const num = document.querySelector('#number');
    num.textContent = `You picked the number ${input}! Guess a number between 1 and ${input}.`;

    correctGuess = Math.floor(Math.random() * input) + 1
    console.log(correctGuess)

}

function guessNumber() {

    let message = document.getElementById("message");
    guess = Number(document.getElementById("guess").value)


    if (isNaN(guess)) {
        message.innerHTML = "Nice try! That is NOT a number!"
    } else if (guess === correctGuess) {
        results.push(guess)
        message.innerHTML = `"You got it! It took you ${results.length} tries and here are your tries: ${results}"`
    } else if (guess > correctGuess) {
        results.push(guess)
        message.innerHTML = "No, try a lower number."
    } else {
        results.push(guess)
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
1. If the guess is NaN, display "That is not a number!"
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
