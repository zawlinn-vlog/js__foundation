"use strict";

import Init from "./init.js";
import { rollBtn, holdBtn, restartBtn } from "./init.js";

const gameObj = new Init();

console.log(gameObj);

rollBtn.addEventListener("click", function () {
  //
  gameObj.gameStart();

  //   console.log("click");
});

holdBtn.addEventListener("click", function () {
  gameObj.switchPlayer();
});

restartBtn.addEventListener("click", function () {
  gameObj.setDefault();
});

// let count = 0;

// function info() {
//   count++;
//   return {
//     next: function () {
//       return count <= 5 ? { value: count, done: false } : { done: true };
//     },
//   };
// }

// console.log(info().next());
// console.log(info().next());
// console.log(info().next());
// console.log(info().next());
// console.log(info().next());
// console.log(info().next());

// function count() {
//   let count = 0;

//   return function () {
//     count++;
//     return count;
//   };
// }

// const startCount = count();

// console.log(startCount());
// console.log(startCount());
// console.log(startCount());
