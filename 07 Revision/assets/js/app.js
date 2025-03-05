"use strict";

// Declare Variable

/* 

    var < ES 1 to 5

    let & const ES6



*/

var name = "Zaw Linn Tun";

console.log(name);

// DATA TYPE

/* 

    String - sequence of character
    number - float and int
    Boolean - true / False
    Null 
    array
    object
    undefined
    set
    map
    symbol
*/

let fullname = "Zaw Linn Tun";

console.log(typeof fullname);

let age = 28;

console.log(typeof age);

let graduate = true;

console.log(typeof graduate);

let married;
console.log(married);

let err = null;

console.log(err);

let friends = ["Ko Phyo", "Pyae Chan Aung", "Hussein"];

console.log(friends, typeof friends);

let stu = Symbol("study");

let bio = {
  firstname: "Zawlinn",
  lastname: "Tun",
  fullname,
  age,
  graduate,
  [stu]: "coding",
};

console.log(bio);
