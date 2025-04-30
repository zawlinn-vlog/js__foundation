"use strict";

import Init from "./init.js";
import { rollBtn } from "./init.js";

const gameObj = new Init();

console.log(gameObj);

rollBtn.addEventListener("click", function () {
  gameObj.gameStart();
  //   console.log("click");
});
