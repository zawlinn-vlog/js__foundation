"use strict";

function funA() {
  return this;
}

// without strict mode return window obj; with strict mode return undefined;
console.log(funA());

const funB = () => this;

// return window obj both without or with strict;
console.log(funB());

const obj = {
  name: "Zawlinn",
  birthYear: 1997,
  getAge: function () {
    const now = 2025;
    // const innerObj = this;

    // const calcAge = function () {
    //   return now - innerObj.birthYear;
    // };

    const calcAge = () => {
      return now - this.birthYear;
    };

    return calcAge();
  },
};

const str = `${obj.name} is ${obj.getAge()} Years Old!`;

console.log(str);

const obj2 = {
  birthYear: 2010,
};

obj2.getAge = obj.getAge;

console.log(obj2);
console.log(obj2.getAge());

// const x = obj2.getAge;

// x(); // Uncaught TypeError

let a = 5;
let b = a;
a = 10;
console.log(`Value of a : ${a}`);
console.log(`Value of b : ${b}`);

const obj3 = {
  fullName: "Zawlinn",
  family: ["U Sein Lin", "Daw Ohnmar"],
};

const obj4 = obj3;

obj3.family.push("Wai Mar Lin"); // Value by Reference

console.log(obj3);
console.log(obj4);

function init() {
  return `I am ${this.fullName} and I am ${this.age}`;
}

const obj5 = {
  fullName: "Saram Khan",
  age: 28,
};

const obj6 = {
  fullName: "Gulam Abbas",
  age: 34,
};

console.log(init.call(obj5));
console.log(init.apply(obj6));
console.log(init.bind(obj6)());

const arr = ["one", "two", "three", "four", "five", "six"];

// const [x, , y] = arr;

const { fullName: fname, age: currentAge } = obj5;

const arr2 = Object.entries(obj5);

const arr3 = Object.entries(arr);

const sarr = new Set();

sarr.add("Mango");
sarr.add("Lemon");
sarr.add("Orange");

console.log(sarr);

const arr4 = Array.from(sarr);

const marr = new Map();

marr["first"] = "FirstName";
marr[true] = "Married";

console.log(marr);
console.log(Object.entries(marr));

console.table(arr3);

console.log(arr4);

console.table(arr2);

console.log(fname, currentAge);

// console.log(`Value of x: ${x}`);
// console.log(`Value of y: ${y}`);
