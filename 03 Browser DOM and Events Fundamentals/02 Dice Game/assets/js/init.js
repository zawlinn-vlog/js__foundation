"use strict";

const sideE0 = document.querySelector(".card__0");
const sideE1 = document.querySelector(".card__1");
const scoreE0 = document.querySelector("#score__0");
const scoreE1 = document.querySelector("#score__1");

const currentE0 = document.querySelector("#current__0");
const currentE1 = document.querySelector("#current__1");

const diceImg = document.querySelector(".dice__img");

export const rollBtn = document.querySelector(".btn__play");

export const restartBtn = document.querySelector(".btn__restart");

export const holdBtn = document.querySelector(".btn__hold");

export default class Init {
  #ranDice;
  _active;
  _totalPoint;
  _scores;
  _count;
  _playerFinished;

  constructor() {
    this.setDefault();
  }

  #makeRanDice() {
    return Math.trunc(Math.random() * 6 + 1);
  }

  setDefault() {
    diceImg.classList.add("hidden");
    sideE0.classList.remove("winner__player");
    sideE0.classList.add("player__active");
    sideE1.classList.remove("winner__player");
    sideE1.classList.remove("player__active");
    this.#ranDice;
    this._active = 0;
    this._totalPoint = 0;
    this._scores = [0, 0];
    this._count = 0;
    this._playerFinished = false;

    rollBtn.removeAttribute("disabled");
    holdBtn.setAttribute("disabled", true);
    restartBtn.setAttribute("disabled", true);

    scoreE0.textContent = this._scores[0];
    scoreE1.textContent = this._scores[1];
    currentE0.textContent = this._scores[0];
    currentE1.textContent = this._scores[1];
  }

  _allDisable() {
    rollBtn.setAttribute("disabled", true);
    holdBtn.setAttribute("disabled", true);
  }

  _checkWinner() {
    if (this._scores[0] > this._scores[1]) {
      sideE0.classList.add("winner__player");
      sideE0.classList.add("player__active");
      sideE1.classList.remove("player__active");

      this._allDisable();
    } else {
      sideE0.classList.remove("player__active");
      sideE1.classList.add("player__active");
      sideE1.classList.add("winner__player");
      this._allDisable();
    }

    scoreE0.textContent = 0;
    scoreE1.textContent = 0;
    diceImg.classList.add("hidden");

    restartBtn.removeAttribute("disabled");
  }

  switchPlayer() {
    this._count++;

    if (this._count >= 2) {
      this._checkWinner();
      return -1;
    }

    diceImg.classList.add("hidden");

    sideE0.classList.toggle("player__active");
    sideE1.classList.toggle("player__active");

    this._active = this._active == 1 ? 0 : 1;
  }

  gameStart() {
    holdBtn.removeAttribute("disabled");
    // restartBtn.removeAttribute("disabled");

    this.#ranDice = this.#makeRanDice();
    console.log(this.#ranDice);

    document.querySelector(`#score__${this._active}`).textContent =
      this.#ranDice;

    //

    if (this.#ranDice == 1) {
      console.log(this._scores[this._active]);
      this.switchPlayer();
      return -1;
    }

    //

    diceImg.setAttribute("src", `./assets/img/dice-${this.#ranDice}.png`);
    this.#ranDice == 1
      ? diceImg.classList.add("hidden")
      : diceImg.classList.remove("hidden");

    //

    this._scores[this._active] += this.#ranDice;

    //
    document.querySelector(`#current__${this._active}`).textContent =
      this._scores[this._active];

    //
  }
}
