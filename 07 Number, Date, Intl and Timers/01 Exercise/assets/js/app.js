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

cluserName.addEventListener('keyup', function () {
  clAccountBtn.classList.remove('btn__disabled');
  clAccountBtn.removeAttribute('disabled');
});

clAccountBtn.addEventListener('click', e => {
  e.preventDefault();
  Banking.delAccount();
  Banking.defaultInit();
});

loanAmount.addEventListener('keyup', function () {
  loanBtn.removeAttribute('disabled');
  loanBtn.classList.remove('btn__disabled');
});

loanBtn.addEventListener('click', e => {
  e.preventDefault();
  Banking.loanAccount();
});

// const allMov = Banking.getAccounts().flatMap(usr => usr.movements).reduce((acc,cur) => acc+cur, 0);

const allMov = Banking.getAccounts().map(usr => usr.movements);

const flatArr = allMov.flat();

console.log(allMov);

console.log(flatArr);

flatArr.push(305);
flatArr.push(40);


const rearr = flatArr.reduce((acc,cur) => {
  cur > 0 ? ++acc.deposite : ++acc.withdraw;
  return acc;
}, {deposite: 0, withdraw: 0});

console.log(rearr);


console.log(Number('23'));
console.log(Number('23px')); // NaN
console.log(Number('A23')); // NaN

console.log(Number.parseInt('20'));
console.log(Number.parseInt('20.55'));
console.log(Number.parseInt('20px'));
console.log(Number.parseInt('A20')); // NaN


console.log(Number.parseFloat('30.045'));
console.log(Number.parseFloat('30.045px'));
console.log(Number.parseFloat('pi 30.045'));

console.log((49).toFixed(2)); // return As String
console.log((535).toExponential(3)); // return as string
 
console.log((40 + '44').valueOf());  // return as string
console.log((40 + 44).valueOf()); // return as number

console.log(Math.round(55.4));
console.log(Math.round(55.5));

console.log(Math.floor(55.4));
console.log(Math.floor(55.5));

console.log(Math.ceil(55.4));
console.log(Math.ceil(55.5));

console.log(Math.trunc(44.4));
console.log(Math.trunc(44.55));

console.log(Math.ceil(Math.random() * 5 ));

let ran = Math.ceil(Math.random() * 6);

while(ran < 6){

  ran = Math.ceil(Math.random() * 6);

  console.log('inside', ran);


  if(ran == 6) break;
  

}