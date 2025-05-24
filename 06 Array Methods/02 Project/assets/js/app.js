'use strict';

import Banking, { 
  clAccountBtn, 
  cluserName, 
  loanAmount, 
  loanBtn, 
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

cluserName.addEventListener('keyup', function(){
  clAccountBtn.classList.remove('btn__disabled');
  clAccountBtn.removeAttribute('disabled')
})

clAccountBtn.addEventListener('click', e => {
  e.preventDefault();
  Banking.delAccount();
  Banking.defaultInit();
})

loanAmount.addEventListener('keyup', function(){
  loanBtn.removeAttribute('disabled');
  loanBtn.classList.remove('btn__disabled')
})

loanBtn.addEventListener('click', e =>{
  e.preventDefault();
  Banking.loanAccount();
})






// let timeLeft = 5 * 60; // 5 minutes in seconds

// const timerInterval = setInterval(function () {
//   const minutes = Math.floor(timeLeft / 60);
//   const seconds = timeLeft % 60;

//   console.log(`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`);

//   timeLeft--;

//   if (timeLeft < 0) {
//     clearInterval(timerInterval);
//     console.log("Time's up!");
//   }
// }, 1000);
