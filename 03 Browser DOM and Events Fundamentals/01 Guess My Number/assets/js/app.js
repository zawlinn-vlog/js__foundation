"use strict";

import Init from "./sys.js";
import { btnReset, btnSubmit } from "./sys.js";

const gameObj = new Init();

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
