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
        message.innerHTML = "That is not a number!"
    } else if (guess > input || guess < 1) {
        message.innerHTML = "That number is not in range, try again."
    } else if (results.includes(guess)) {
        message.innerHTML = `"Sorry, you already guessed ${guess}. Try again!"`
    } else if (guess === correctGuess) {
        results.push(guess)
        message.innerHTML = `"You got it! It took you ${results.length} tries and your guesses were ${results.join(', ')}."`
    } else if (guess > correctGuess) {
        results.push(guess)
        message.innerHTML = "No, try a lower number."
    } else {
        results.push(guess)
        message.innerHTML = "No, try a higher number."
}
}
