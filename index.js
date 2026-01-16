console.log`hello`;
alert(`welcome!`);
const correctNumber = `22`;

const userGuess = prompt(`Guess a number.`);

const userGuessAsNumber = Number(userGuess);
if (userGuessAsNumber > correctNumber) {
  alert(`That number is too high!`);
} elseif (userGuessAsNumber < correctNumber) {
    alert(`That number is too Low!`);
} else {
    alert(`That number is Correct!!`);
}

