"use strict";

// GETTING DOM

const inputNum = document.querySelector(".form__number");
const btnReset = document.querySelector(".btn__reset");
const txtResult = document.querySelector(".result__point");
const btnSubmit = document.querySelector(".btn__submit");
const pointTitle = document.querySelector(".point__title");
const scoreNumber = document.querySelector(".score__number");
const highscoreNumber = document.querySelector(".highscore__number");
const wrapper = document.querySelector(".wrapper");

/*
let score, hScore;

hScore = 0;

// DISPLAY TEXT;

const displayContent = (ele, txt) => {
  ele.textContent = txt;
  inputNum.value = "";
};

displayContent(highscoreNumber, hScore);

// GET INPUT VALUE

const getInput = (el) => {
  return el.value;
};

// STYLING CSS

const styling = (txt, width, bgColor) => {
  displayContent(txtResult, txt);

  txtResult.style.width = width;

  wrapper.style.backgroundColor = bgColor;
};

// ALL RESET

const contentCreate = (txt, width, bgColor) => {
  displayContent(scoreNumber, score);

  styling(txt, width, bgColor);
};

const genRanNum = () => {
  return Math.trunc(Math.random() * 20) + 1;
};

// init

const init = () => {
  score = 20;

  // scoreNumber.textContent = score;
  // highscoreNumber.textContent = hScore;

  contentCreate("?", "15rem", "#222");
};

init();

let getRandom = genRanNum();

console.log(getRandom);

const checkFun = (e) => {
  e.preventDefault();

  let getInputNum = Number(getInput(inputNum));

  createContent("?", "15rem", "#222");

  if (!getInputNum) {
    displayContent(pointTitle, "⛔️ NO Number ....");
  } else if (getInputNum === getRandom) {
    displayContent(pointTitle, "✅ Correct Number ");

    if (score > hScore) {
      hScore = score;
    }

    displayContent(highscoreNumber, hScore);

    createContent(getRandom, "20rem", "green");
  } else if (getInputNum !== getRandom) {
    createContent("?", "15rem", "#222");

    if (score > 1) {
      const txt =
        getInputNum > getRandom
          ? "📈 Number is too High!"
          : "📉 Number is too Low!";

      displayContent(pointTitle, txt);

      score--;

      displayContent(scoreNumber, score);
    } else {
      displayContent(pointTitle, "💥 Game Over !");
      displayContent(scoreNumber, 0);
    }
  }
};

const restartFun = (e) => {
  e.preventDefault();
  getRandom = genRanNum();

  init();
};

btnSubmit.addEventListener("click", checkFun);

btnReset.addEventListener("click", restartFun);

*/
