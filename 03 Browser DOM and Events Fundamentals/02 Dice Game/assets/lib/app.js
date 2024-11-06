"use strict";

var sideE0 = document.querySelector(".card__0");
var sideE1 = document.querySelector(".card__1");
var scoreE0 = document.querySelector("#score__0");
var scoreE1 = document.querySelector("#score__1");
var currentE0 = document.querySelector("#current__0");
var currentE1 = document.querySelector("#current__1");
var diceImg = document.querySelector(".dice__img");
var rollBtn = document.querySelector(".btn__play");
var restartBtn = document.querySelector(".btn__restart");
var holdBtn = document.querySelector(".btn__hold");
var score, currentScore, active;
var playing = true,
  onHold = false;
holdBtn.disabled = !onHold;
function setDefault() {
  score = [0, 0];
  currentScore = 0;
  active = 0;
  scoreE0.textContent = score[0];
  scoreE1.textContent = score[1];
  currentE0.textContent = currentScore;
  currentE1.textContent = currentScore;
  sideE0.classList.remove("winner__player");
  sideE0.classList.add("player__active");
  sideE1.classList.remove("winner__player");
  sideE1.classList.remove("player__active");
  rollBtn.disabled = false;
  playing = true;
  onHold = false;
}
setDefault();
restartBtn.addEventListener("click", function () {
  setDefault();
});

//

var switchUser = function switchUser() {
  //
  currentScore = 0;

  //

  document.querySelector(".card__".concat(active)).classList.toggle("player__active");

  //

  document.querySelector("#current__".concat(active)).textContent = currentScore;

  //

  active = active == 1 ? 0 : 1;
  console.log(active);

  //

  document.querySelector(".card__".concat(active)).classList.toggle("player__active");
};
rollBtn.addEventListener("click", function () {
  if (playing) {
    var dice = Math.trunc(Math.random() * 6) + 1;
    onHold = true;
    onHold ? holdBtn.disabled = false : holdBtn.disabled = true;

    //

    diceImg.classList.remove("hidden");
    diceImg.src = "./assets/img/dice-".concat(dice, ".png");

    //

    if (dice !== 1) {
      //

      currentScore += dice;

      //

      document.querySelector("#current__".concat(active)).textContent = currentScore;
    } else {
      //

      switchUser();
    }
  }
});
holdBtn.addEventListener("click", function () {
  if (onHold) {
    //

    document.querySelector("#score__".concat(active)).textContent = currentScore;
    score[active] = currentScore;
    console.log(score);
    if (score[active] >= 20) {
      playing = false;

      //

      document.querySelector(".card__".concat(active)).classList.add("winner__player");

      //

      document.querySelector(".card__".concat(active)).classList.add("player__active");

      //

      rollBtn.disabled = true;

      //

      holdBtn.disabled = true;
    } else {
      //

      switchUser();
    }
  }
});