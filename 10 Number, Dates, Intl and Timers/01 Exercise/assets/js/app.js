// LECTUREs

console.log(23 === 23.0);

// Base 10 - 0 to 9 . 1/10  = 0.1. 3/10 = 3.3333333

// Binary base 2 - 0 1

console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

// Conversion

console.log(Number('23'));
console.log(+'23');

// Parsing

console.log(Number.parseInt('30px'));
console.log(Number.parseInt('e23'));
console.log(Number.parseInt('30.6px'));
console.log(Number.parseFloat('30.5px'));
console.log(Number.parseFloat('2.5rem'));

// console.log(parseFloat('   2.5rem  '));

// Checking if value is NaN
console.log(Number.isNaN(20)); // False
console.log(Number.isNaN('20')); // False
console.log(Number.isNaN(+'20X')); // True
console.log(Number.isNaN(23 / 0)); // False

// Checking if value is real number not a string
console.log(Number.isFinite(20)); // True
console.log(Number.isFinite('20')); // False
console.log(Number.isFinite(+'20X')); // False
console.log(Number.isFinite(20 / 0)); // False

// Checking Integer

console.log(Number.isInteger(23)); // True
console.log(Number.isInteger(23.5)); // False
console.log(Number.isInteger(23 / 0)); // False

// Math

console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, 18, '23', 11, 2));
console.log(Math.max(5, 18, '23p', 11, 2));

console.log(Math.min(5, 18, 23, 11, 2));

console.log(Math.PI * Number.parseFloat('10px') ** 2);

console.log(Math.random());

console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;

// 0 .... 1 -> 0 ... (max - min) -> min...max

console.log(randomInt(15, 20));

// Rounding Integers
console.log(Math.trunc(23.3));

console.log(Math.round(23.3));
console.log(Math.round(23.9));

console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));

console.log(Math.floor(23.3));
console.log(Math.floor('23.9'));

console.log(Math.trunc(-23.9));
console.log(Math.trunc(-23.9));

// Rounding Decimals

console.log((2.7).toFixed(0)); // return string value not a number
console.log((2.7).toFixed(3)); // return string value not a number
console.log((2.345).toFixed(2)); // return string value not a number
console.log(+(2.344).toFixed(2)); // return string value not a number
