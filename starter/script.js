'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉 Correct Number';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;

/*// console.log(document.querySelector('.guess').value);
const secretNumber = Math.trunc(Math.random() * 20);
document.querySelector('.number').textContent = secretNumber;

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔No Number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number';
  } else if (guess > secretNumber) {
    if(score>1){
    document.querySelector('.message').textContent = '📈 Too high!';
    score--;
    document.querySelector('.score').textContent =
     score;
   }else{ 
     document.querySelector('.message').textContent=
     '💥you loss the game!'
   }
  } else if (guess < secretNumber) {
    if(score>1){
    document.querySelector('.message').textContent = '📉 Too low!';
    score--;
    document.querySelector('.score').textContent = score;
    document.querySelector('.score').textContent =
     score;
    }else{
          document.querySelector('.message').textContent=
     '💥you loss the game!'
    }
  }
});
*/

const secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number';

    //when players wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#32CD32';
    document.querySelector('.number').style.width=
    '30rem'

    //when guess is too high or too low
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📈 Too High!' : '📉 Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 you loos the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function (){
    document.querySelector('.message').textContent='start guessing...'
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width=
    '15rem'
    document.querySelector('.score').textContent = 20;
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value=''

})
