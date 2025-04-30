"use strict";

var _sys = _interopRequireDefault(require("../js/sys.js"));
function _interopRequireDefault(e) {
  return e && e.__esModule ? e : { default: e };
}
var btnSubmit = document.querySelector(".btn__submit");
var btnReset = document.querySelector(".btn__reset");
var gameObj = new _sys["default"]();
console.log(gameObj);

// BTNRESET
btnReset.addEventListener("click", function () {
  gameObj.setDefault();
  console.log(gameObj);
});

// BTNBUTTON
btnSubmit.addEventListener("click", function (e) {
  e.preventDefault();

  //
  gameObj.gameStart();
});
