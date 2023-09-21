// Program needs to take a number and roll that many d6
// Function to pass an argument of how many dice
// 1-6 Randomizer multiplied by input


// function declaration named diceRoller that take the parameter of 'dice
// initialize variable of 0 for use in summing
// for loop that runs as many times as there are dice in the given parameter
//
const diceRoller = function(dice) {
  let results = [];

  for (let i = 0; i < dice; i++) {
    results.push(Math.floor(Math.random() * dice) + 1);
  }
  return results;
};

const numberOfDice = 6;
const individualResults = diceRoller(numberOfDice);

console.log(`Result of rolling ${numberOfDice} dice: ${individualResults.join(', ')}`);