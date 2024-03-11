"use strict";

const message = document.querySelector(".message");
const number = document.querySelector(".number");
const score = document.querySelector(".score");
const guess = document.querySelector(".guess");
const check = document.querySelector(".check");
const body = document.querySelector("body");
const again = document.querySelector(".again");
const highscore = document.querySelector(".highscore");

const winningBgColor = "#60b347";
const losingBgColor = "#a80505";
const initialBgColor = "#222";

let winCondition = false;

check.addEventListener("click", checkGuess);
again.addEventListener("click", playAgain);

initializeGame();

function initializeGame() {
  number.value = Math.trunc(Math.random() * 20) + 1;
  score.value = 20;
}

function checkGuess() {
  if (!guess.value) {
    updateGame("🛑 No Number");
  } else if (+guess.value === number.value) {
    winGame();
  } else if (+guess.value > number.value && +guess.value <= 20) {
    updateGame("⏫ Too High!");
  } else if (+guess.value >= 1 && +guess.value < number.value) {
    updateGame("⏬ Too Low!");
  } else {
    updateGame("🛑 Invalid Number");
  }
  score.textContent = score.value;
}

function updateGame(messageText) {
  if (score.value > 1 && !winCondition) {
    message.textContent = messageText;
    score.value--;
    if (score.value === 1) {
      loseGame();
    }
  }
}

function winGame() {
  message.textContent = "✨ Correct Number!";
  body.style.backgroundColor = winningBgColor;
  number.style.width = "30rem";
  number.innerText = number.value;
  if (highscore.innerText < score.value) {
    highscore.innerText = score.value;
  }
  winCondition = true;
}

function loseGame() {
  message.textContent = "❌ You lost the game!";
  body.style.backgroundColor = losingBgColor;
  number.style.width = "30rem";
  number.textContent = number.value;
  score.value = 0;
}

function playAgain() {
  initializeGame();
  score.innerText = 20;
  message.textContent = "Start guessing...";
  body.style.backgroundColor = initialBgColor;
  number.style.width = "15rem";
  number.innerText = "?";
  guess.value = "";
  winCondition = false;
}
