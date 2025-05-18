'use strict';

const array = ['a', 'b', 'c', 'd', 'e'];

console.log(array);
// Slice
console.log(array.slice(1));
console.log(array.slice(3));
console.log(array.slice(-1));
console.log(array.slice(-3, -1));

// splice
// imutable array - change orginal array
console.log(array.splice(2.4));
console.log(array);

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

/*

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

// TO mutate original array

/*

=> Add to Original

.push (end)
.unshift (start)

Remove from Original

.pop (end)
.shift (start)
.splice (any)


Others

.reverse
.sort
.fill


=> A New Array

computed from original

.map (loop)

fitered using condition

.filter

portion of original

.slice

adding original to other

.concat

flattening the original

.flat
.flatMap


=> An array index

based on value

.indexOf

based on test condition

.findIndex


=> an Array element

Base on test condition

.find


=> Know if array includes

Based on value:

.inclueds

Based on test condition:

.some
.every


=> A new String

.join

=> To transform to value

Based on accumulator

.reduce

=> To just loop array

Based on callback

.forEach - does not create a new array. just loop over it



*/

/*

// Numbers

console.log(23 === 23.0);

// Base 10 - 0 to 9 /  1/10 = 0.1  3/10 = 0.3333333

// Base 2 - 0 1
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 == 0.3);

console.log((0.1 * 10 + 0.2 * 10) / 10);

// Conversion

console.log(Number('23'));
console.log(+'23');

// Parsing

console.log(Number.parseFloat('20px', 10));
console.log(Number.parseFloat('e23', 10));

console.log(Number.parseInt('    2.5rem    '));
console.log(Number.parseFloat('    2.5rem    '));

console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log('20F', Number.isNaN('20F'));
console.log(Number.isNaN(+'20X'));
console.log(Number.isNaN(23 / 0));

// Number or Not
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'23'));
console.log('20/0', isFinite(23 / 0));

// Integer

console.log(Number.isInteger(20));
console.log(Number.isInteger('20'));
console.log(Number.isInteger(+'23'));
console.log(Number.isInteger(23 / 0));

console.log(isNaN('20F'));

// Math

console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, 18, '23', 11, 2));

console.log(Math.min(5, 18, '23', 11, 2));
console.log(Math.min(5, 18, '23', 11, 2));

console.log(Math.PI * Number.parseFloat('10px') ** 2);

// console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) =>
  Math.trunc(Math.random() * (max - min) + 1) + min;

// console.log(randomInt(10, 20));

// Round Integers

console.log(Math.trunc(23.3));

console.log(Math.round(23.3));
console.log(Math.round(23.9));

console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));

console.log(Math.floor(23.9));
console.log(Math.floor(23.9));

// Rounding Decimals

console.log((2.7).toFixed()); // return string not a number
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(2));
console.log(+(2.7).toFixed(3));

console.log(5 % 2);
console.log(5 / 2);

console.log(8 % 2);
console.log(8 / 2);

console.log(6 % 2);
console.log(6 / 2);

console.log(7 % 2);
console.log(7 / 2);

const isEven = n => n % 2 === 0;

console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(514));

console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);

console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);

console.log(42252354235423452354235235423453n);
console.log(BigInt(42252354235423452354235235423453));
console.log(typeof 42252354235423452354235235423453n);

// Operations

console.log(10000n + 10000n);
console.log(42532424242n * 10000n);
// console.log(Math.sqrt(16n));

const huge = 20238092332423n;
const num = 23;

console.log(huge * BigInt(num));

// Exceptions

console.log(20n > 15);
console.log(20n === 20);
console.log(typeof 20n);
console.log(20n == 20);

console.log(huge + ' is REALLY big!!!');

// Divisions

console.log(11n / 3n);
console.log(11 / 3);
*/
