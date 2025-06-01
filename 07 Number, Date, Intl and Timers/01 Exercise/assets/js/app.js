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

const rearr = flatArr.reduce(
  (acc, cur) => {
    cur > 0 ? ++acc.deposite : ++acc.withdraw;
    return acc;
  },
  { deposite: 0, withdraw: 0 }
);

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

console.log((40 + '44').valueOf()); // return as string
console.log((40 + 44).valueOf()); // return as number

console.log(Math.round(55.4));
console.log(Math.round(55.5));

console.log(Math.floor(55.4));
console.log(Math.floor(55.5));

console.log(Math.ceil(55.4));
console.log(Math.ceil(55.5));

console.log(Math.trunc(44.4));
console.log(Math.trunc(44.55));

console.log(Math.ceil(Math.random() * 5));

let ran = Math.ceil(Math.random() * 6);

while (ran < 6) {
  ran = Math.ceil(Math.random() * 6);

  console.log('inside', ran);

  if (ran == 6) break;
}

// new Date(string)

// new Date(year, month(0-11), date, hour, minute, second)

// new Date(milliseconds)

console.log(new Date('2025 5 11 15:12'));
console.log(new Date('2025/11/25'));
console.log(new Date('02/12/1991'));

console.log(new Date(1991, 2, 12, 5, 12));

const today = new Date();

console.log(Number(today));
console.log(new Date(Number(today)));

console.log(today.toTimeString());
console.log(today.toDateString());
console.log(today.toLocaleDateString());
console.log(today.toLocaleString());
console.log(today.toLocaleTimeString());
console.log(today.toISOString());

// GET

today.setFullYear(2020);
today.setMonth(10);
today.setDate(10);

console.log(today);
console.log(today.toISOString());

const dateFormat = new Intl.DateTimeFormat('th-TH', {
  // weekday: 'long', // 'short', 'narrow'
  // year: 'numeric', // '2-digit', 'narrow'
  // month: 'long', // 'short', '2-digit', 'narrow'
  // day: 'numeric',
  // weekday: 'long',
  // hour: 'numeric',
  // minute: 'numeric',
  // hour12: true,
  // era: 'long', // 'short', 'narrow'
  dateStyle: 'full', // 'long', 'full', 'medium', 'short'
  timeStyle: 'short',
  timeZone: 'Australia/Sydney',
  hour12: true,
}).format(today);

console.log(dateFormat);
// console.log(today.getTimezoneOffset());
// console.log(navigator);

const currency = new Intl.NumberFormat('th-TH', {
  style: 'currency', // digit, currency, unit, percent
  currency: 'THB',
  currencyDisplay: 'narrowSymbol', // narrowSymbol, name, code, symbol(default)
}).format(300);

console.log(currency);
