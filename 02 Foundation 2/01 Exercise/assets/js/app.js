"use strict";

/*

let hasDriverslicense = false;
let passTest = true;

// if (passTest) hasDriverlicense = true;

if (passTest) hasDriverslicense = true;

if (hasDriverslicense) console.log("You can drive a car.");

function makeJuice(fruit1, fruit2) {
  let numOfFruit1 = fruitMachine(4);
  let numOfFruit2 = fruitMachine(2);
  console.log(
    `We make a juice by ${numOfFruit1} pieces of ${fruit1} and ${numOfFruit2} pieces of ${fruit2}`
  );
}

makeJuice("apple", "Orange"); // Argument

function fruitMachine(num) {
  return num * 4;

  // console.log(
  //   `We can make Juice with ${num1 * 2} piece of Apple and ${
  //     num2 * 2
  //   } of Orange`
  // );
}

fruitMachine(4, 2);

// Function Declaration

function person(name) {
  return `Hello! ${name}`;
}

const person1 = person("Aung Kyaw -");

console.log(`${person1} I am a Visitor who wanna visit in Thailand`);

// Hoisting

car();

function car() {
  console.log(
    `A vehicle has four wheels that we can control and use it for travelling. `
  );
}

// Function Expression

const student = function () {
  console.log("A body who study Thai language.");
};

student();

// Error Cannot be Hoisted

// computer();

// const computer = function () {
//   console.log(` A Computer that we can use for Design and Coding.`);
// };

// Arrow Function

const ageCal = (birthYear) => 2024 - birthYear;

const age = ageCal(1997);

console.log(`I am ${age} years old.`);

const yearUntilRetirement = (birthYear, firstName) => {
  const age = 2024 - birthYear;

  const retirment = 65 - age;

  if (retirment > 0) {
    console.log(`${firstName} retires in ${retirment} years.`);
    return retirment;
  } else {
    console.log(`${firstName} is already retired`);
    return -1;
  }

  return `${firstName} retires in ${retirment} years.`;
};

console.log(yearUntilRetirement(1991, "Jonas"));
console.log(yearUntilRetirement(1950, "zawlinn"));

const friend1 = "Micheal";
const friend2 = "Steven";
const friend3 = "Peter";

// =        index -  0,         1,       2
const friends = ["Michael", "Steven", "Peter"]; // CREATE ARRAY JS - square bracket syntax

const newLength = friends.push("Ivan"); // push is function that attach value to array and return length

console.log(friends, friends.length, newLength);

let newArray = friends.unshift("John"); // return length

console.log(friends, newArray);

newArray = friends.pop(); // return cutting value from end and apply to original array

console.log(friends, newArray);

newArray = friends.shift(); // return cutting value from front and apply to original array

console.log(friends, newArray);

console.log(friends.indexOf("Steven"), Boolean("")); // return index of finding value not find return -1
console.log(friends.indexOf("Steve"), Boolean("")); // return index of finding value not find return -1

friends.push(23);
console.log(friends.includes("Steven")); // return true or not found return false and it's case-sensitive
console.log(friends.includes("Bob"));
console.log(friends.includes("23"));
console.log(friends.includes(23));

if (friends.includes("Peter")) console.log(`You have a friend called Peter`);
if (friends.includes("Steven")) console.log(`You have a friend called Steven`);

const years = new Array(1991, 1984, 2008, 2020); // CREATE ARRAY JS - literal syntax

console.log(years);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

// [] - put inside must be expression not a statement

friends[2] = "Johnson"; // change or mutate value

console.log(friends);

// friends = ["Bobs", "Alice"]; // ERROR const must not change it's value

const fName = "Jonas";
const jonas = [fName, "Schmedtmann", 2023 - 1991, "teacher", friends];

console.log(jonas);

const allYears = [1990, 1967, 2002, 2010, 2018];

const age1 = ageCal(allYears[0]);
const age2 = ageCal(allYears[1]);
const age3 = ageCal(allYears[allYears.length - 1]);

console.log(age1, age2, age3);

const ages = [
  ageCal(allYears[0]),
  ageCal(allYears[1]),
  ageCal(allYears[allYears.length - 1]),
];

console.log(ages);

const jonasObj = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2024 - 1991,
  job: "teacher",
  friends: ["Micheal", "Peter", "Steven"],
};

console.log(jonasObj);
console.log(
  jonasObj.firstName,
  jonasObj.lastName,
  jonasObj["friends"],
  jonasObj["age"]
);

const nameKey = "Name";
console.log(jonasObj["first" + nameKey], jonasObj["last" + nameKey]);

jonasObj.locaton = "Portugal";
jonasObj["twitter"] = "@jonasschmedtmann";
console.log(jonasObj);

// const interestIn = prompt(
//   "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends"
// );

// console.log(jonasObj.interestIn); // undefined

// console.log(jonasObj[interestIn]);


*/
/*
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "Teacher",
  firends: ["Micheal", "Peter", "Steven"],
  hasDriversLicense: false,

  calcAge: function () {
    this.age = 2024 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} -year old ${
      jonas.job
    }, and he has ${this.hasDriversLicense ? "a" : "not"} driver's license.`;
  },
};

console.log(jonas.getSummary());
console.log(jonas.age);

*/

// for (let i = 0; i <= 30; i++) {
//   console.log(`Lifting weights repetition ${i} 🪳`);
// }

const friends = ["Michael", "Steven", "Peter"];

// for (let i = 0; i < friends.length; i++) {
//   console.log(friends[i]);
// }

// const years = [1990, 1967, 2002, 2010, 2018];
// const ages = [];
// for (let i = 0; i < years.length; i++) {
//   ages.push(2024 - years[i]);
// }

// console.log(ages);

const jonas = ["Jonas", "Schmedtmann", 2023 - 1991, "teacher", friends];

console.log("--- ONLY STRING ---");

for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue;

  console.log(jonas[i], typeof jonas[i]);
}

console.log("--- BREAK WITH NUMBER ---");

for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === "number") break;

  console.log(jonas[i], typeof jonas[i]);
}

for (let exercise = 0; exercise < 4; exercise++) {
  console.log(`---------- Starting Exercise #${exercise}----------`);

  for (let rep = 1; rep <= 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting  weight  repetition ${rep} 🪳`);
  }
}

// While Loop

const aList = [1, 2, 4, 5, 6, 7, 8, 8, 9, 4, 3, 3, 58, 10, 30, 40, 114, 55];

let list = 0;
let sum = 0;

while (list < aList.length) {
  sum += aList[list];

  list++;
}

console.log(`Total value is = ${sum}`);

let dice = Math.trunc(Math.random() * 6) + 1;

let turn = 1;
while (dice !== 6) {
  console.log(`Turn ${turn} : ${dice}`);

  turn++;

  dice = Math.trunc(Math.random() * 6) + 1;

  if (dice === 6) console.log("End Games");
}
