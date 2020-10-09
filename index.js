const prompt = require('readline-sync')

const maxGuesses = 3;
let currentGuess = 0;
const maxRange = 10;

const randomNumber = Math.floor(Math.random() * maxRange + 1);

let userGuess = prompt.question(
    `Hi, I've chosen a number between 1 and ${maxRange}, you have ${maxGuesses} tries to guess it.\n
    `);

function handleGuess(userGuess) {
    for (let guesses = 0; guesses < maxGuesses; guesses++) {
    if(userGuess === randomNumber) {
        console.log('You win!');
        playAgain()
    } else if (currentGuess < maxGuesses) {
        console.log ('You lose. \nThe number was ${randomNumber}');
    } else if (userGuess > randomNumber) {
        console.log('Think lower');
        console.log('Guess Left: ', maxGuesses - currentGuess);
    } else {
        console.log('Think higher');
        console.log('Guess Left: ', maxGuesses - currentGuess);
    }
}
}

handleGuess(userGuess)

function handleGuess(userGuess) {
    for (let guesses = 0; guesses < maxGuesses; guesses++) {
    if(userGuess === randomNumber) {
        console.log('You win!');
        playAgain()
    } else if (currentGuess < maxGuesses) {
        console.log ('You lose. \nThe number was ${randomNumber}');
    } else if (userGuess > randomNumber) {
        console.log('Think lower');
        console.log('Guess Left: ', maxGuesses - currentGuess);
    } else {
        console.log('Think higher');
        console.log('Guess Left: ', maxGuesses - currentGuess);
    }
}
}

handleGuess(userGuess)