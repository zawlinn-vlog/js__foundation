'use strict';

// DATA

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2,
  pin: 111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -100, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const curriencies = new Map([
  ['USD', 'United States Dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound Sterling'],
]);

// const arr = ['a', 'b', 'c', 'd', 'e', 'f'];
// const arr2 = ['j', 'h', 'i', 'k'];

// console.log(arr.slice(2)); // startIdx, endIdx
// console.log(arr.slice(1, 4));

// console.log(arr.slice(-3));

// // console.log(arr.splice(0, 2), arr); // startIdx and length
// // console.log(arr.splice(1), arr); // mutate

// console.log(arr.reverse(), arr); // mutate

// console.log(arr.concat(arr2), arr);
// console.log(arr.concat(arr2).sort(), arr);

// console.log(arr.concat(arr2).join('__'));

const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0)); // idx

// getting last array element

console.log(arr[arr.length - 1]); // endIdx
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

// console.log('Jonas'.at(-1));
// console.log('Jonas'.includes('J'));
// console.log('Jonas'.startsWith('Jo'));
// console.log('   Jonas'.endsWith('As'));
// // console.log('Jonas'.padStart(20, '✅'));
// console.log('   Jonas   '.split(''));
// console.log();
// // console.log('Jonas'.repeat(5));

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const mov of movements) {
//   if (mov > 0) {
//     console.log(`You deposited : ${mov}`);
//   } else console.log(`You withdraw : ${Math.abs(mov)}`);
// }

console.log('---- FOR OF ----');
for (const [i, val] of movements.entries()) {
  if (val > 0) console.log(`Movement ${i + 1} : You deposited ${val}`);
  else console.log(`Movement ${i + 1} : You withdraw ${Math.abs(val)}`);
}

console.log('----- FOREACH -----');
movements.forEach(function (val) {
  console.log(`You ${val > 0 ? 'deposited' : 'withdraw'} : ${Math.abs(val)}`);
});

console.log(0 && null); // false return
console.log(1 || null); // true return
console.log(0 ?? undefined); // null and undefined
