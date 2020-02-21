/*
Write a guessing game where the user has to guess a secret number.
After every guess the program tells the user whether their number was too large or too small.
At the end the number of tries needed should be printed.
It counts only as one try if they input the same number multiple times consecutively. Range 1-100.
*/

let secretNumber = 0;
let range = [];
let guessNumber;
let guessTries = 0;

// iife function sets an array of numbers from 1 to 100
const rangeGenerator = (() => {
  for (let i = 1; i <= 100; i++) {
    range.push(i);
  }
})();

// function to choose random number from array provided
const randomNumber = numbers => {
  let randomIndex = Math.floor(Math.random() * numbers.length);
  return numbers[randomIndex];
};

// set secret number
secretNumber = randomNumber(range);

// algorithm with slicing range of numbers
const guessingAlghoritm = numbers => {
  console.log(`Secret number: ${secretNumber}\n`);

  while (numbers.length != 1) {
    guessNumber = randomNumber(numbers);
    console.log(`Guess number: ${guessNumber}`);
    let numIndex = numbers.indexOf(guessNumber);
    guessTries += 1;

    if (guessNumber === secretNumber) {
      console.log(`\nBingo!\nTries number: ${guessTries}`);
      return;
    }

    if (guessNumber < secretNumber) {
      numbers = numbers.slice(numIndex + 1, numbers.length);
    } else {
      numbers = numbers.slice(0, numIndex);
    }
    if (numbers.length === 1) {
      console.log(`\nFailed :(\nTries number: ${guessTries}`);
      return;
    }
  }
};

guessingAlghoritm(range);
