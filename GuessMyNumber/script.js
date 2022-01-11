'use strict';

let secretNumber = Math.trunc(Math.random() * 10) + 1;
let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (score >= 1) {
    if (!guess) {
      document.querySelector('.message').textContent = 'No number';
    } else if (guess === secretNumber) {
      //   document.querySelector('.message').textContent = 'Correct number';
      displayMessage('correct number');
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else if (guess > secretNumber) {
      document.querySelector('.message').textContent = 'number is too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (guess < secretNumber) {
      document.querySelector('.message').textContent = 'number is too low';
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    document.querySelector('.message').textContent = 'you lost the game';
  }
});
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //score = 20;
  document.querySelector('.score').textContent = '20';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
