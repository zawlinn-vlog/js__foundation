"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/* 

JavaScript is a High-Level Object-Oriented, Multi-Paradigm Promgramming Language.🤯

High-Level - We don't have to worry about complex stuff like memory manageement

Object-Oriented - Based on objects, for storing most kinds of data

Programming - instruct computer to do things

*/

/*
let js = 'amazing';
js = 'boring';
if (js == 'amazing') alert('JavaScript is FUN!');

40 + 8 + 23 - 10;
console.log(40 + 8 + 23 - 10);

console.log('Zaw Linn');

console.log(23);

// let firstName = 'Matila'; // variables is like parcel box to input what you want

// firstName = 'Bob';

// let $lastName = 'Josh';

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// console.log($lastName);

let myFirstJob = 'coder'; // this declare is more suitable
let myCurrentJob = 'Teacher';

let job1 = 'programmer';
let job2 = 'teacher';

console.log(myFirstJob);

// Data Types

let age = 23;
let firstName = 'Jonas';
let children;

console.log(age, firstName, children);




// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(23);
// console.log(typeof 'jonas');

// javascriptIsFun = 'YES!';
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// console.log(null);
// console.log(typeof null);

// const introduced in ES6

// let age = 30;
// age = 31;

// const birthYear = 1991;
// birthYear = 1990; // typeError

// const job;

// var job = 'programmer';
// job = 'teacher';

// lastName = 'Schmedtmann';
// console.log(lastName);

/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(ageJonas, ageSarah);

console.log(ageJonas / 2, ageSarah * 3, 2 ** 16);

const firstName = 'jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

/*
let x = 10 + 5; // 15
x += 10; // x = x + 10;
x *= 4; // x = x * 4
x++; // x = x + 1 - postfix
x--; // x = x - 1
++x; // x = x + 1 - prefix
console.log(x);

*/

/*

// Comparison Operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah <= 18);

const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);

// (1 + ( (2 ** 3) * 4 / 5) ) >> 6
// │    │ └─ 1. ─┘        │ │
// │    └────── 2. ───────┘ │
// └────────── 3. ──────────┘

// (1 + ( ( (2 ** 3) * 4 ) / 5) ) >> 6;
// │    │ │ └─ 1. ─┘     │    │ │
// │    └─│─────── 2. ───│────┘ │
// └──────│───── 3. ─────│──────┘
//        └───── 4. ─────┘

console.log(1 + (2 ** 3 * 4) / 5);
console.log(10 + 20 - (4 * 2) / 2);

// assignment operator act right to left

let x, y;

x = y = 25 - 10 - 5; // x = y = 10, y = 10 so x = 10

// const averageAge = (ageJonas + ageSarah) / 2;
const averageAge = ageJonas + ageSarah / 2;
console.log(ageJonas, ageSarah, averageAge);

*/

/*

let name = 'Jonas';
let job = 'teacher';

let birthYear = 1991;

const bio =
  "I'm " +
  name +
  ', a ' +
  job +
  ' and ' +
  (2037 - 1991) +
  ' years old and a ' +
  job +
  '.';

console.log(bio);

const bio2 = `I'm ${name} , a ${job} and ${
  2037 - 1991
} years old and a ${job}.`;

console.log(bio2);

let ageSarah = 2024 - 1991;

ageSarah = 15;

let ageEnough = ageSarah >= 18;

console.log(ageEnough);

if (ageEnough) console.log(`Sarah can apply driver license.`);
else
  console.log(
    `Sarah cannot get driver license yet, to get driver license ${
      18 - ageSarah
    } year wait.`
  );

birthYear = 2001;

let century;

if (birthYear <= 2000) {
  century = 20;
} else if (birthYear >= 2000) {
  century = 21;
}

console.log(`${century} century born.`);


*/

/*  Types Coercion vs converstion 

type converstion is changed by manually. 
type coercion is changed by automatically.

*/

var inputYear = '1991';
console.log(inputYear + 18, inputYear); // type coercion

console.log(Number(inputYear) + 18); // type converstion

console.log(Number('Jonas'), typeof NaN === "undefined" ? "undefined" : _typeof(NaN)); // NaN is number type.

console.log(String(23), 23);

// 5 falsy values => 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean([]));
var age = 19;
if (age === '18') console.log("You just became an adult :D (Strict).");else if (age == '18') console.log("You Just Become an Adult :D (loosly)");else console.log("Something Else!");
var hasDriverLicense = true;
var hasGoodSight = true;
console.log(hasDriverLicense || hasGoodSight);
console.log(hasDriverLicense && hasGoodSight);
console.log(!hasDriverLicense || hasGoodSight);
console.log(!hasDriverLicense && hasGoodSight);
console.log(!hasDriverLicense || !hasGoodSight);
console.log(hasDriverLicense || !hasGoodSight);
var day = 'Wednesday';
switch (day) {
  case 'Monday':
    console.log("Plan Course Structure! \uD83D\uDCC5");
    console.log("Go to Coding meetup \uD83E\uDD1D");
    break;
  case 'Tueday':
    console.log("Prepare theory videos \uD83C\uDFA5");
    break;
  case 'Wednesday':
  case 'Thursday':
    console.log("Write code examples \uD83D\uDCBB");
    break;
  case 'Friday':
    console.log("Record Videos \uD83C\uDFA5");
    break;
  case 'Saturday':
  case 'Sunday':
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day!");
}