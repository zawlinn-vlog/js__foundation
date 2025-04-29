"use strict";

import Init from "./sys.js";

const inputNum = document.querySelector(".form__number");
const btnReset = document.querySelector(".btn__reset");
const txtResult = document.querySelector(".result__point");
const btnSubmit = document.querySelector(".btn__submit");
const pointTitle = document.querySelector(".point__title");
const scoreNumber = document.querySelector(".score__number");
const highscoreNumber = document.querySelector(".highscore__number");
const wrapper = document.querySelector(".wrapper");

// let score, hscore, bestscore, ranNum;
// score = 0;
// hscore = 20;
// ranNum = makeRandom();

class Game {
  _hscore;
  _score;
  _bestscore;
  #ranNum;

  constructor() {
    this.initObj = new Init();
    this.#ranNum = this.initObj.makeRandom();
  }

  setDefault() {
    this._hscore = 20;
    this._score = 0;
    scoreNumber.textContent = this._score;
    highscoreNumber.textContent = this._hscore;
    pointTitle.textContent = `🤔 Start guessing ....`;
  }
}

const gameObj = new Game();
gameObj.setDefault();

console.log(gameObj);
