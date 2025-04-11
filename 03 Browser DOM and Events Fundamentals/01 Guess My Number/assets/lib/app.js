"use strict";

// GETTING DOM
var inputNum = document.querySelector(".form__number");
var btnReset = document.querySelector(".btn__reset");
var txtResult = document.querySelector(".result__point");
var btnSubmit = document.querySelector(".btn__submit");
var pointTitle = document.querySelector(".point__title");
var scoreNumber = document.querySelector(".score__number");
var highscoreNumber = document.querySelector(".highscore__number");
var wrapper = document.querySelector(".wrapper");
var score, hScore;
hScore = 0;

// DISPLAY TEXT;

var displayContent = function displayContent(ele, txt) {
  ele.textContent = txt;
  inputNum.value = "";
};
displayContent(highscoreNumber, hScore);

// GET INPUT VALUE

var getInput = function getInput(el) {
  return el.value;
};

// STYLING CSS

var styling = function styling(txt, width, bgColor) {
  displayContent(txtResult, txt);
  txtResult.style.width = width;
  wrapper.style.backgroundColor = bgColor;
};

// ALL RESET

var contentCreate = function contentCreate(txt, width, bgColor) {
  displayContent(scoreNumber, score);
  styling(txt, width, bgColor);
};
var genRanNum = function genRanNum() {
  return Math.trunc(Math.random() * 20) + 1;
};

// init

var init = function init() {
  score = 20;

  // scoreNumber.textContent = score;
  // highscoreNumber.textContent = hScore;

  contentCreate("?", "15rem", "#222");
};
init();
var getRandom = genRanNum();
console.log(getRandom);
var checkFun = function checkFun(e) {
  e.preventDefault();
  var getInputNum = Number(getInput(inputNum));
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
      var txt = getInputNum > getRandom ? "📈 Number is too High!" : "📉 Number is too Low!";
      displayContent(pointTitle, txt);
      score--;
      displayContent(scoreNumber, score);
    } else {
      displayContent(pointTitle, "💥 Game Over !");
      displayContent(scoreNumber, 0);
    }
  }
};
var restartFun = function restartFun(e) {
  e.preventDefault();
  getRandom = genRanNum();
  init();
};
btnSubmit.addEventListener("click", checkFun);
btnReset.addEventListener("click", restartFun);