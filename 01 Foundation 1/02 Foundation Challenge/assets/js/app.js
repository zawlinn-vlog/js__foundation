/*

// let markWeight = 78;
// let markHeight = 1.69;
let markWeight = 95;
let markHeight = 1.88;

// let johnWeight = 92;
// let johnHeight = 1.95;
let johnWeight = 85;
let johnHeight = 1.76;

// let markBMI = markWeight / markHeight ** 2;
// let johnBMI = johnWeight / johnHeight ** 2;

let markBMI = markWeight / (markHeight * markHeight);
let johnBMI = johnWeight / (johnHeight * johnHeight);

let markHigherBMI = markBMI > johnBMI;

console.log(markHigherBMI);

/

/*  Coding Challenge #2  */
/*
if (markBMI * 2 > johnBMI) {
  console.log(`Mark's BMI is higher than Jhon's!`);
  console.log(`Mark's BMI (${markBMI}) is higher than Jhon's (${johnBMI})!`);
} else {
  console.log(`John's BMI is higher than Mark's!`);
}
*/

// CODING Challenge #3

// const averageDolphins = (96 + 108 + 89) / 3;
// const averageKoalas = (88 + 91 + 110) / 3;

// BONUS 1:

// const averageDolphins = (97 + 112 + 101) / 3;
// const averageKoalas = (109 + 95 + 123) / 3;

// BONUS 2:

const averageDolphins = (97 + 112 + 101) / 3;
const averageKoalas = (109 + 95 + 106) / 3;

if (averageDolphins > averageKoalas) console.log(`Dolphins win 🦈`);
else if (averageKoalas > averageDolphins) console.log(`Koalas win 🐨`);

//

if (averageDolphins > averageKoalas && averageDolphins >= 100)
  console.log(`Dolphins win 🦈`);
else if (averageKoalas > averageDolphins && averageKoalas >= 100)
  console.log(`Koalas win 🐨`);
else console.log(`Both teams do not win 😊`);

// CODING CHALLENGE #4

let tip;

let bill = 275;
bill = 40;
bill = 430;
/*
if (bill > 50 && bill < 300) {
  tip = bill * 0.15;
} else {
  tip = bill * 0.2;
}

console.log(
  `The bill was ${bill}, the tip was ${tip} and the total value ${bill + tip}`
);

*/

tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill was ${bill}, the tip was ${tip} and the total value ${bill + tip}`
);
