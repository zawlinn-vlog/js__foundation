"use strict";

/*

const calcAverage = (a, b, c) => (a + b + c) / 3;

// const avgDolphins = calcAverage(44, 23, 71);
// const avgKoalas = calcAverage(65, 54, 49);

const avgDolphins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);

const checkWinner = (team1, team2) => {
  if (team1 >= 2 * team2) {
    return `Dolphins win 🏆 (${team1} vs ${team2 * 2})`;
  } else if (team2 >= 2 * team1) {
    return `Koalas win 🏆 (${team2} vs ${team1 * 2})`;
  } else {
    return `No Teams Win ...`;
  }
};

const winner = checkWinner(avgDolphins, avgKoalas);

// const winner = checkWinner(576, 111);

console.log(winner);

// CHALLENGE #2

const calcTip = (bill) => {
  // if (bill > 50 && bill < 300) {
  //   return bill * 0.15;
  // } else {
  //   return bill * 0.2;
  // }

  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

let tips = calcTip(100);

const bills = [125, 555, 44];

tips = [calcTip([bills[0]]), calcTip([bills[1]]), calcTip([bills.length - 1])];

const total = [
  bills[0] + tips[0],
  bills[1] + tips[1],
  bills[bills.length - 1] + tips[tips.length - 1],
];

console.log(bills, tips, total);

// Challenge 03

const markMiller = {
  name: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    return this.mass / this.height ** 2;
  },
};

const jhonSmith = {
  name: "Jhon Smith",
  mass: 92,
  height: 1.92,

  calcBMI: function () {
    return this.mass / this.height ** 2;
  },
};

console.log(
  markMiller.calcBMI() > jhonSmith.calcBMI()
    ? `${markMiller.name}'s BMI (${markMiller.calcBMI()}) is higher than ${
        jhonSmith.name
      }'s BMI (${jhonSmith.calcBMI()})`
    : `${jhonSmith.name}'s BMI (${jhonSmith.calcBMI()}) is higher than ${
        markMiller.name
      }'s BMI (${markMiller.calcBMI()})`
);

*/

// Challenge #4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = (bill) => {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}

const calcAverage = (arr) => {
  let i = 0;
  let sum = 0;
  while (i < arr.length) {
    sum += arr[i];

    i++;
  }

  return sum / arr.length;
};

console.log(bills, tips, totals);

// const result = calcAverage(bills);
// const result = calcAverage(tips);
const result = calcAverage(totals);
console.log(result);
