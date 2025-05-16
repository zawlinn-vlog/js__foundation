"use strict";

/*
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

let num1 = 100;
let num2 = num1;

console.log(num1);
console.log(num2);

num1 = 101;

console.log(num1);
console.log(num2);

let addressSmith = {
  address: "No.482, Oak Pho Dan Street, Auk Kyin Qr, Thaton",
  phone: "057-400256",
};

let addressWilliam = addressSmith;

console.log(addressSmith, addressWilliam);

addressSmith.phone = "057-400405";

console.log(addressSmith, addressWilliam);

// Destructor Array and Object

// Array

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic", "Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      closed: 22,
    },
    fri: {
      open: 11,
      closed: 23,
    },
    sat: {
      open: 0, // 24 hours
      closed: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },
};

// const [mainMenu, subMenu] = restaurant.mainMenu;
// const [mainMenu, , subMenu] = restaurant.mainMenu;

// console.log(mainMenu, subMenu);

// const { starterMenu, mainMenu } = restaurant;
const { starterMenu: sMenu, mainMenu: mMenu } = restaurant;

// console.log(sMenu, mMenu);

// Rest Operator Array

const [first, last, ...other] = restaurant.starterMenu;

console.log(first, last, other);

// Rest Operator Object ...

const { starterMenu, name, openingHours, ...rest } = restaurant;

console.log(starterMenu, name, openingHours, rest);

// Spreat Operator ...

const newMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(newMenu);

const newRestaurant = { founder: "Saram Khan", ...restaurant };
console.log(restaurant, newRestaurant);

console.log(...restaurant.starterMenu);

// SHADOW COPY

// const newarr = newMenu;

// newMenu.push("Fry Noodle");

// console.log(newMenu);
// console.log(newarr);

const newarr = [...newMenu];

newarr.push("Fry Noodle");

console.log(newMenu);
console.log(newarr);

// SHORT CIRCUIT && || ??

// && true skip

console.log(true && "Zawlinn");
console.log(0 && "Saram");
console.log("" && "Saram");
console.log(null && "Saram");
console.log(undefined && "Saram");

// || False SKIP

console.log(true || "Mango");
console.log(0 || "Mango");

// ??

console.log(null ?? "Anymous");
console.log(undefined ?? "Anymous");

console.log(restaurant.owner); // undefined

restaurant.owner ??= "Anynomous";

console.log(restaurant);

restaurant.getMenu = function () {
  return newMenu;
};

console.log(restaurant?.getMenu?.());

for (let i of newMenu) {
  console.log(i);
}

for (let [ind, val] of newMenu.entries()) {
  console.log(`${ind + 1}: ${val}`);
}

// set

const setarr = new Set(["hello", "hi", "hey"]); // ,ust be array

console.log(setarr);

const setMenu = new Set(newMenu);

console.log(setMenu.size);
console.log(setMenu.has("Garlic"));
console.log(setMenu.delete("Garlic"));
setMenu.clear();
setMenu.add("Palata");
setMenu.add("E Kyar Kway");
setMenu.add("Sar Mu Sar");
console.log(setMenu);
// console.log(Object.entries(newMenu));
console.log(Array.from(setMenu));

const integrant = "Vegetables";

const menu = {
  integrant,
  owner: "Zaw Linn",
  birthYear: 1997,
  job: "Sale Staff",
  bio() {
    return `I am ${this.owner} and ${
      2025 - this.birthYear
    } years old and working as ${this.job}!`;
  },
};

console.log(menu.bio());

const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct 🍕"],
  [false, "Wrong ❌"],
]);

console.log(question.get("question"));
for (let [key, val] of question) {
  if (typeof key === "number") console.log(`Answer ${key} : ${val}`);
}

const answer = 3;

if (question.get("correct") == answer) console.log(question.get(true));
else console.log(question.get(false));

const aa = new Set([1, 3, 4, 5, 6]);

aa.add("Hello");

console.log(aa);

const [bb] = aa;

console.log(...aa, bb);

const arrAA = [...aa];

console.log(arrAA);

const aMap = new Map();

aMap.set("name", "Zaw Linn");

console.log(aMap);

const airline = "TAP to portugal";

const plane = "A114";

console.log(airline.at(0)); // return character
console.log(airline.charAt("2")); // return character

console.log(airline.length);

// Method

console.log(airline.slice(4));
console.log(airline.slice(0, 4));
console.log(airline.slice(0, 3), airline.slice(0, 3).length);
console.log(airline.slice(-8));

//

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//

console.log(airline.includes("portugal"));

//

console.log(airline.search("Tap"));
console.log(airline.search("to"));

const teststr = "Take me home country street. The street is narrow and rush";

console.log(teststr.replace("street", "road"));
console.log(teststr.replaceAll("street", "road"));

function makeCapital(str) {
  const s = str.toLowerCase().split(" ");
  const arr = [];

  for (let str of s) {
    arr.push(str.replace(str[0], str[0].toUpperCase()));
  }

  return arr.join(" ").concat(".");
}

console.log(makeCapital(airline));

console.log(airline.startsWith("T")); // case sensitive
console.log(airline.startsWith("t")); // case sensitive

console.log(airline.endsWith("gal"));

console.log(airline.padStart(20, "*").padEnd(30, "*"));

console.log(airline.repeat(10));

*/

// function add(a = 10, b = 25) {
//   return a + b;
// }
// function add({ a = 10, b = 25 }) {
//   return a + b;
// // }
// function add(arr) {
//   let initVal = 0;
//   for (let ind of arr) {
//     initVal += ind;
//   }

//   return initVal;
// }

// console.log(add([1, 4, 5, 242, 2, 232, 4]));


const numArr = [
  100, 1500, 320, 480, 500, 100,100, 1700, 480, 200, 1500, 250, 225, 200, 250,
];

const array1 = [1, 2, 3, 4];


const sumWithInitial = numArr.reduce(
  (acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  },
  {}
);

console.log(sumWithInitial);


const counting = function (arr){

  const obj = {};

  for(let i of arr){
    let start = 0;

    for(let j of arr){
      if(i == j) obj[i] = ++start;
    }
  }

  return obj;
}


const countingObj = counting(numArr);

console.log(Object.keys(countingObj));
console.log(Object.values(countingObj));
console.log(Object.entries(countingObj));

// for(let j in countingObj){
//   console.log(countingObj[j]);
// }

console.log(countingObj);

Object.entries(countingObj).map(([item,val]) => {
  console.log(`Times of ${item} : ${val} `);
})


const zawlinn = {
  name: "Zaw Linn",
  passport: "243242424224235324"
}

const plane = "B737";

const checkIn = function(flight,passenger){
  let flightno = flight.slice(1);
  passenger.name = "Mr. ".concat(passenger.name);

  if(passenger.passport == 243242424224235324){
    console.log(`Your are checkIn `);
  }

}

function Car(name, speed) {
  this.name = name;
  this.speed = speed;
}

Car.prototype.getInfo = function () {
  return `${this.name} can drive ${this.speed}`;
};

function Bus(name, speed, seat) {
  Car.call(this, name, speed);
  this.seat = seat;
}

Bus.prototype = Object.create(Car.prototype);

const toyota = new Car("Toyota", 1800);

const hino = new Bus("Hino", 2000, 15);

console.log(toyota.getInfo());

console.log(toyota);

console.log(hino);

console.log(hino.getInfo());

const objproto = {
  getSpeed() {
    console.log(
      `I am Driving fast speed car, ${this.name}, it speed is ${this.speed}`
    );
  },
};

const saram = Object.create(objproto);

saram.name = "Toyota";
saram.speed = 2200;

console.log(saram);

saram.getSpeed();

const counter = {
  value: 23,
  inc: function () {
    this.value++;
  },
};

counter.inc();
counter.inc();
counter.inc();
counter.inc();
counter.inc();

const someOtherObject = {
  value: 100,
};

console.log(counter);

const aab = counter.inc.bind(someOtherObject);

aab();
aab();
aab();

console.log(aab);

console.log(someOtherObject);


function toMakeCapitalize(str){
  let [first, ...others] = str.split(' ');

  return ([first.toUpperCase(), ...others].join(' '))
}

const transforming  = function(str, fn){
  console.log(str);
  console.log(fn(str));
  console.log(fn.name);
}

transforming('JavaScript is the best!', toMakeCapitalize);

const greet = function(greeting){

  return function (name){
    console.log(`${greeting} to ${name}`);
  }
}

const g = greet('Hey');

g('Jonas');

greet('Hello')('Zawlinn');


const agreeting = greet => name => console.log(`${greet} to ${name}`);

const h = agreeting('Helo');

h('Dolly')
agreeting('Hi')('Saram');

const boring = {
  airline: 'Boring',
  iataCode: 'BR',
  books: [],
  booking(flightNo, name){
    console.log(`${name} is booked seat on ${this.airline} flight ${this.iataCode }${flightNo}`);
    this.books.push({flight: `${this.iataCode}${flightNo}`, name})
  }
}

boring.booking(239, 'Jame William');
boring.booking(737, 'Ester Smith');

console.log(boring);


const eurowing = {
  airline: 'Eurowing',
  iataCode: 'EW',
  books: []
}

const book = boring.booking;

book.call(eurowing, 23, 'Zaw Linn Tun');
book.call(eurowing, 49, 'Saram Tun');

console.log(eurowing);

