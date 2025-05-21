'use strict';

import Banking from './main.js';
import {
  submit__l,
  loginPIN,
  sortMov,
  transferBtn,
  transferAmount,
} from './main.js';

// console.log(Banking);
// console.log(Banking.getAccounts());

// LOGIN BTN CONTROL
loginPIN.addEventListener('keyup', Banking.btnCtrl);

// PRESS SUBMIT BTN
submit__l.addEventListener('click', function (e) {
  e.preventDefault();
  Banking.login();
});

sortMov.addEventListener('click', Banking.sortList.bind(Banking));

transferAmount.addEventListener('keyup', Banking.disabletBtn);

transferBtn.addEventListener('click', e => {
  e.preventDefault();
  Banking.transfer();
});

let timeLeft = 5 * 60; // 5 minutes in seconds

const timerInterval = setInterval(function () {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  console.log(`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`);

  timeLeft--;

  if (timeLeft < 0) {
    clearInterval(timerInterval);
    console.log("Time's up!");
  }
}, 1000);
