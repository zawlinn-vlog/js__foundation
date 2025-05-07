// "use strict";

const firstName = "Zaw Linn";

function calcAge(birthYear) {
  const age = 2025 - birthYear;

  function printAge() {
    const output = `${firstName}, you are ${age}, born in ${birthYear}`;

    console.log(output);

    if (birthYear >= 1981 && birthYear <= 2005) {
      const firstName = "Saram";
      var millenial = true;
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }

    // console.log(str);
    // console.log(millenial);
    console.log(add(5, 6));
  }

  printAge();
}

calcAge(1997);

// console.log(firstName);
// console.log(age);
// console.log(birthYear);

// var firstName = "Jonas";
// let age = 23;
// const birthYear = 1991;

// FUNCTION

// funDelc();

// funExp();

// funArr();

// function funDelc() {
//   console.log("This is Function Declaration");
// }

// var funExp = function () {
//   console.log("This is Function Expresion");
// };

// var funArr = () => console.log("This is Function Arrow.");

// if (!items) {
//   delItems();
// }

// var items = 10;

// function delItems() {
//   console.log("All Items are deleted!");
// }

// THIS KEYWORDs

// var firstName = "Zaw Linn";

// const obj = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 2010,
//   calAge: function () {
//     const self = this;
//     const isAdult = function () {
//       console.log(self);
//       console.log(2024 - self.birthYear >= 18 ? "Adult" : "NO");
//     };

//     isAdult();

//     return 2024 - this.birthYear;
//   },
//   // greet: () => console.log(`Hello, ${this.firstName}`),

//   greet: function () {
//     console.log(`Hello, ${this.firstName}`);
//   },
// };

// obj.calAge();

// console.log(obj.calAge());

// const obj2 = {
//   birthYear: 1966,
// };

// obj2.calAge = obj.calAge;

// obj.calAge();

// obj2.calAge();

// // console.log(obj2.calAge());

// obj.greet();

// let x = 20;
// let y = x;

// x = 30;

// console.log(x, y);

// const bio = {
//   firstName: "Jonas",
//   lastName: "William",
//   friends: ["Jack", "Mark"],
// };

// const afterbio = Object.assign({}, bio);

// afterbio.lastName = "Smith";

// afterbio.friends.push("Jocker", "Cina");

// console.log(bio, afterbio);

// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic", "Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],
//   openingHours: {
//     thu: {
//       open: 12,
//       closed: 22,
//     },
//     fri: {
//       open: 11,
//       closed: 23,
//     },
//     sat: {
//       open: 0, // 24 hours
//       closed: 24,
//     },
//   },

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery: function ({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = "20:00",
//     address,
//   }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
//     );
//   },

//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(
//       `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
//     );
//   },

//   orderPizza: function (mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient, otherIngredients);
//   },
// };

// //

// restaurant.orderDelivery({
//   time: "22:30",
//   address: "Via del Sole, 21",
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: "Via del Sole, 21",
//   starterIndex: 3,
// });

// restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");

// // const ingredients = [
// //   prompt(`Let's make pasta! Ingredient 1?`),
// //   prompt(`Ingredient 2?`),
// //   prompt(`Ingredient 3?`),
// // ];

// // restaurant.orderPasta(...ingredients);

// // OBJECTs

// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Guiseppe" };

// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };

// restaurantCopy.name = "Ristorante Roma";

// console.log(restaurantCopy.name);

// console.log(restaurant.name);

// // DESTRUCTION ARRAY

// let [main, , secondary] = restaurant.categories;

// console.log(main, secondary);

// [main, secondary] = [secondary, main];

// console.log(restaurant.order(2, 0));

// // DESTRUCTION OBJECT

// const { name, openingHours, categories } = restaurant;

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(restaurantName, hours, tags);

// // Default value
// const { menu = [], starterMenu: starters = [] } = restaurant;

// console.log(menu, starters);

// //
// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// console.log(pizza, risotto, otherFood);

// // object

// const { sat, ...weekdays } = restaurant.openingHours;

// console.log(sat, weekdays);

// // functions

// const add = function (...obj) {
//   let sum = 0;

//   for (let i = 0; i < obj.length; i++) sum += obj[i];

//   console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];

// add(...x);

// // Mutating Variables

// let a = 111;
// let b = 999;

// const obj = { a: 24, b: 7, c: 14 };

// ({ a, b } = obj);

// console.log(a, b);

// // nested objects

// const {
//   fri: { open: o, closed: c },
// } = openingHours;
// console.log(o, c);

// // const nested = [2, 4, [5, 6]];
// // const [i, , [j, k]] = nested;

// // console.log(i, j, k);
// // const [p = 1, q = 1, r = 1] = [8, 9];

// // console.log(p, q, r);

// // SPREAD OPERATOR

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];

// console.log(badNewArr);

// const newArr = [1, 2, ...arr];

// console.log(newArr);

// console.log(...newArr);
// console.log(1, 2, 7, 8, 9);

// const newMenu = [...restaurant.mainMenu, ...restaurant.starterMenu, "Gnocci"];

// for (const x of newMenu) {
//   console.log(x);
// }

// for (const [index, items] of newMenu.entries()) {
//   console.log(`${index + 1}: ${items}`);
// }

// const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// const keys = Object.keys(restaurant.openingHours);
// const values = Object.values(restaurant.openingHours);

// for (const { open, closed } of values) {
//   console.log(`: Open at ${open} and Closed at ${closed}`);
// }

// console.log(restaurant.openingHours);
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? "Closed";
//   console.log(
//     `On ${day[0].toUpperCase().concat(day.slice(1))}, we${
//       restaurant.openingHours[day] ? " open at" : ""
//     } ${open}`
//   );
// }

// console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
// console.log(restaurant.orderRistato?.(0, 1) ?? "Method does not exist");

// console.log(keys, values);

// // Copy array

// const mainMenuCopy = [...restaurant.mainMenu];

// // join 2 arrays

// const menus = [...restaurant.starterMenu, ...restaurant.mainMenu];

// // console.log(mainMenuCopy, menus);

// // // Iterables: arrays, strings, maps, sets, NOT objects

// // const str = "Jonas";
// // const letter = [...str, " ", "S."];

// // console.log(letter);

// // // falsly value

// // console.log(Boolean(0));
// // console.log(Boolean(""));
// // console.log(Boolean(null));
// // console.log(Boolean(undefined));
// // console.log(Boolean(" "));
// // console.log(Boolean([]));
// // console.log(Boolean({}));

// // // Short circuit OR (truly return)

// // console.log(0 || "Jonas");
// // console.log("" || "Schmedtmann");
// // console.log(null || "js");
// // console.log("oop" || undefined);
// // console.log(0 || null);

// // const user = {
// //   fullName: "Zaw Linn",
// //   age: 33,
// // };

// // const newUser = {
// //   fullName: "Maung Kaung",
// //   job: "Programmer",
// // };

// // // user.job = user.job || "Engineer";
// // // user.job ||= "Engineer";
// // // user.job = user.job ?? "Engineer";
// // user.job ??= "Engineer";
// // // newUser.job = newUser.job && "Sky craper";
// // newUser.job &&= "Sky Craper";

// // console.log(user.job, user, newUser);

// // // short circuit AND (falsly return)

// // console.log(0 && "jonas");
// // console.log("" && "Schmedtmann");
// // console.log("Hello" && "Schmedtmann");
// // console.log(null && "js");
// // console.log("oop" && undefined);
// // console.log(0 && null);

// // // nurish operator

// // console.log(0 ?? "jonas");
// // console.log("" ?? "Schmedtmann");
// // console.log("Hello" ?? "Schmedtmann");
// // console.log(null ?? "js");
// // console.log(undefined ?? "JavaScript");
// // console.log("oop" ?? undefined);
// // console.log(0 ?? null);

const orderSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);

console.log(orderSet);

console.log(new Set("Jonas"));

console.log(orderSet.size);
console.log(orderSet.has("Pizza"));
console.log(orderSet.has("Bread"));
orderSet.add("Garlic Bread");
orderSet.add("Garlic Bread");
orderSet.delete("Risotto");
// orderSet.clear();

for (const order of orderSet) console.log(order);

const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];

const staffUnique = [...new Set(staff)];

console.log(staffUnique);

console.log(orderSet);

const rest = new Map();

rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
console.log(rest.set(2, "Lisbon, Portugal"));
rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open :D")
  .set(false, "We are closed ;(");

// rest.delete("open");
// rest.clear()
let arr = [1, 2];

rest.set(arr, "Test");

console.log(rest, rest.get(arr));

let time = 12;

console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

console.log(rest.size);

const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct 🎉"],
  [false, "Try again!"],
]);

console.log(question);

for (const [num, lan] of question) {
  if (typeof num === "number") console.log(`${num}: ${lan}`);
}

// const answer = Number(
//   prompt(`What is the best programming language in the world?,
//   '1' "C",
//   '2' "Java",
//   '3' "JavaScript",
//   'correct', 3,
//   'true' "Correct 🎉",
//   'false' "Try again!`)
// );

// console.log(question.get(answer));
console.log([...question]);
// console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);
