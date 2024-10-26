"use strict";

// GETTING DOM

const inputNum = document.querySelector(".form__number");
const btnReset = document.querySelector(".btn__reset");
const txtResult = document.querySelector(".result__point");
const btnSubmit = document.querySelector(".btn__submit");
const pointTitle = document.querySelector(".point__title");
const scoreNumber = document.querySelector(".score__number");
const highscoreNumber = document.querySelector(".highscore__number");

let initGame = false;

if (!initGame) {
  console.log("Gaming is Started");
}

console.log(
  inputNum,
  btnReset,
  btnSubmit,
  txtResult,
  pointTitle,
  scoreNumber,
  highscoreNumber
);
