"use strict";

const sideE0 = document.querySelector(".card__0");
const sideE1 = document.querySelector(".card__1");
const scoreE0 = document.querySelector("#score__0");
const scoreE1 = document.querySelector("#score__1");

const currentE0 = document.querySelector("#current__0");
const currentE1 = document.querySelector("#current__1");

const diceImg = document.querySelector(".dice__img");

export const rollBtn = document.querySelector(".btn__play");

const restartBtn = document.querySelector(".btn__restart");

const holdBtn = document.querySelector(".btn__hold");

export default class Init {
  #ranDice = 0;
  _active = 0;
  _totalPoint = 0;
  playing = true;
  _scores = [0, 0];

  constructor() {
    this.setDefault();
  }

  #makeRanDice() {
    return Math.trunc(Math.random() * 6 + 1);
  }

  setDefault() {
    diceImg.classList.add("hidden");
    sideE0.classList.remove("winner__player");
  }

  _switchPlayer() {
    sideE0.classList.toggle("player__active");
    sideE1.classList.toggle("player__active");

    this._active = this._active == 1 ? 0 : 1;

    // console.log(this._active);
  }

  gameStart() {
    this.#ranDice = this.#makeRanDice();
    console.log(this.#ranDice);

    //

    if (this.#ranDice == 1) {
      this._switchPlayer();
      console.log(this._active);
      this._scores[this._active] = this._totalPoint;
      console.log(this);
      this._totalPoint = 0;
      return -1;
    }

    //

    diceImg.setAttribute("src", `./assets/img/dice-${this.#ranDice}.png`);
    this.#ranDice == 1
      ? diceImg.classList.add("hidden")
      : diceImg.classList.remove("hidden");

    //

    this._totalPoint += this.#ranDice;

    console.log(this._totalPoint);

    //
    document.querySelector(`#current__${this._active}`).textContent =
      this._totalPoint;
  }
}
