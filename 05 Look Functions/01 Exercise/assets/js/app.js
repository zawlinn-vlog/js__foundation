'use strict';

// function buyTicket(flight, numSeat, price) {
//   const receive = {
//     flight,
//     numSeat,
//     price,
//   };

//   return receive;
// }

function buyTicket(flight = 'A320', numSeat = 1, price = 90 * numSeat) {
  const receive = {
    flight,
    numSeat,
    price,
  };

  return receive;
}

/*

console.log(buyTicket('A320'));
console.log(buyTicket('A320', 2));
console.log(buyTicket('A320', undefined, 360));
console.log(buyTicket('A737', 50));

const flight = 'LH234';

const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 234739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;
  // passenger.flight = flightNum;

  if (passenger.passport === 234739479284) {
    console.log('Check in');
  } else {
    console.log('Wrong passport!');
  }
};

checkIn(flight, jonas);

console.log(flight);
console.log(jonas);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(jonas);

console.log(jonas);
checkIn(flight, jonas);
console.log(flight);

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');

  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  // callback function
  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);

console.log(`========== CALL ANOTHER FUNCTION =========`);

transformer('JavaScript is the best!', oneWord);

const high5 = function () {
  console.log('👋');
};

// document.body.addEventListener("click", high5);

['jonas', 'Martha', 'Adam'].forEach(high5);

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');

greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas');
greet('Hello')('Steven');

const greetArr = greeting => name => console.log(`${greeting} ${name}`);

const greeterArr = greetArr('Hey');
greeterArr('William');
*/

// call, apply methods of functions

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  //book: function(){}
  // book(flightNum, name) {
  //   console.log(
  //     `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
  //   );
  //   this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  // },
};

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = function (flightNum, name) {
  console.log(
    `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
  );
  this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
};

/*

book.call(eurowings, ...[23, 'Sarah williams']);

console.log(eurowings);

book.call(lufthansa, 235, 'Jonas Schmedtmann');

book.call(lufthansa, 737, 'Smith William');
book.call(lufthansa, 709, 'Jhon Wick');

const flightData = [535, 'Jackson William'];
book.apply(eurowings, flightData);
book.call(lufthansa, ...flightData);

console.log(lufthansa);
console.log(eurowings);

const aa = book.bind(eurowings);

aa(453, 'Jackson Smith');

console.log(eurowings);

*/

//

/*

(function () {
  console.log('hello');
})();

function first() {
  let count = 0;

  return function second() {
    count++;

    console.log(count);
  };
}

const x = first();

x();
x();
x();
x();
// first()();
// first()();
// first()();
// first()();

*/
