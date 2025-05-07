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

const x = obj2.getAge;

// x(); // Uncaught TypeError
