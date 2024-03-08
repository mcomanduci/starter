"use strict";

const message = document.querySelector(".message");
const number = document.querySelector(".number");
const score = document.querySelector(".score");
const guess = document.querySelector(".guess");
const check = document.querySelector(".check");
const body = document.querySelector("body");
const again = document.querySelector(".again");
const highscore = document.querySelector(".highscore");

number.value = Math.trunc(Math.random() * 20) + 1;
score.value = 20;
let winCondition = false;

check.addEventListener("click", conditions);

again.addEventListener("click", playAgain);

function conditions() {
  if (!guess.value) {
    noInput();
  } else if (+guess.value === number.value) {
    winGame();
  } else if (+guess.value > number.value && +guess.value <= 20) {
    greaterNumber();
  } else if (+guess.value >= 1 && +guess.value < number.value) {
    lowerNumber();
  } else {
    invalidNumber();
  }
  score.textContent = score.value;
}

function noInput() {
  if (score.value > 1) {
    message.textContent = "🛑 No Number";
  } else {
    loseGame();
  }
}

function winGame() {
  if (score.value > 1 && winCondition === false) {
    message.textContent = "✨ Correct Number!";
    body.style.backgroundColor = "#60b347";
    number.style.width = "30rem";
    number.innerText = number.value;
    if (highscore.innerText < score.value) {
      highscore.innerText = score.value;
    }
    winCondition = true;
  } else if (score.value === 1) {
    loseGame();
  }
}

function loseGame() {
  message.textContent = "❌ You lost the game!";
  body.style.backgroundColor = "#a80505";
  number.style.width = "30rem";
  number.textContent = number.value;
  score.value = 0;
}

function greaterNumber() {
  if (score.value > 1 && winCondition === false) {
    message.textContent = "⏫ Too High!";
    score.value--;
  } else if (score.value === 1) {
    loseGame();
  }
}

function lowerNumber() {
  if (score.value > 1 && winCondition === false) {
    message.textContent = "⏬ Too Low!";
    score.value--;
  } else if (score.value === 1) {
    loseGame();
  }
}

function invalidNumber() {
  if (score.value > 1 && winCondition === false) {
    message.textContent = "🛑 Invalid Number";
  } else if (score.value === 1) {
    loseGame();
  }
}

function playAgain() {
  number.value = Math.trunc(Math.random() * 20) + 1;
  score.value = 20;
  score.innerText = 20;
  message.textContent = "Start guessing...";
  body.style.backgroundColor = "#222";
  number.style.width = "15rem";
  number.innerText = "?";
  guess.value = "";
  winCondition = false;
}
