'use strict';
// Variables needed for Game login
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const number = document.querySelector('.number');
const check = document.querySelector('.check');
let message = document.querySelector('.message');
const again = document.querySelector('.again');
console.log(secretNumber);

////////////////
///// GAME LOGIC
check.addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    message.textContent = 'NO VALUE :(';
  }

  // Winning Condition

  if (guess === secretNumber) {
    document.querySelector('body').style.backgroundColor = 'green';
    message.textContent = 'Correct Answer';
    number.textContent = secretNumber;
  }

  // LOW CONDITION

  if (guess < secretNumber) {
    message.textContent = 'TOO LOW';
    score--;
  } else if (guess > secretNumber) {
    message.textContent = 'TOO HIGH';
    score--;
  }
  document.querySelector('.score').textContent = score;

  if (score === 0) {
    message.textContent = 'YOU LOST THE GAME :(';
    check.style.display = 'none';
  }
});
again.addEventListener('click', function () {
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = 'black';
  number.textContent = '?';
  message.textContent = 'Start Guessing ....';
  document.querySelector('.score').textContent = 20;
});
