"use strict";

const inputNum = document.querySelector(".form__number");

export const btnReset = document.querySelector(".btn__reset");
export const btnSubmit = document.querySelector(".btn__submit");

const txtResult = document.querySelector(".result__point");
const pointTitle = document.querySelector(".point__title");
const scoreNumber = document.querySelector(".score__number");
const highscoreNumber = document.querySelector(".highscore__number");
const wrapper = document.querySelector(".wrapper");

export default class Init {
  _hscore;
  _score;
  _bestscore = 0;
  #ranNum;

  constructor() {
    // SETDEFAULT
    this.setDefault();
  }

  _makeRandom() {
    return Math.trunc(Math.random() * 20) + 1;
  }

  setDefault() {
    this._hscore = 20;
    this._score = 0;
    scoreNumber.textContent = this._score;
    highscoreNumber.textContent = this._hscore;
    pointTitle.textContent = `🤔 Start guessing ....`;
    wrapper.style.backgroundColor = `#222`;
    inputNum.value = "";
    txtResult.textContent = "?";
    btnSubmit.removeAttribute("disabled");
    this.#ranNum = this._makeRandom();
  }

  gameStart() {
    // IF INPUT EMPTY
    if (!inputNum.value || inputNum.value > 20) {
      // pointTitle.textContent = `👎🏽 You Should input a Number 1 to 20!`;
      window.alert("👎🏽 You Should input a Number between 1 to 20 !");
      inputNum.value = "";

      return -1;
    }

    // IF NOT THE SAME
    if (inputNum.value != this.#ranNum) {
      pointTitle.textContent =
        inputNum.value > this.#ranNum
          ? `📈 Number is too High!`
          : `📉 Number is too Low!`;

      this._hscore--;

      highscoreNumber.textContent = this._hscore;

      if (this._hscore < 1) {
        btnSubmit.setAttribute("disabled", true);

        // setTimeout(function () {
        //   alert("GAME OVER");
        // }, 500);

        pointTitle.textContent = `💥 GAME OVER !💥`;
      }

      return -1;
    }

    pointTitle.textContent = `✅ Correct Number `;
    wrapper.style.backgroundColor = `#047804`;
    txtResult.textContent = this.#ranNum;

    if (!this._bestscore) {
      this._bestscore = this._hscore;
    } else {
      setTimeout(() => {
        alert(`Your previous best score is ${this._bestscore}`);
      }, 500);
    }
    scoreNumber.textContent = ++this._score;
    highscoreNumber.textContent = this._hscore;
    btnSubmit.setAttribute("disabled", true);
  }
}
