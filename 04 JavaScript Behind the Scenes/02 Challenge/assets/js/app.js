"use strict";

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// // 1.
// const [palyers1, players2] = game.players;

// const [gk, ...fieldPlayers] = palyers1;

// const allPlayers = [...palyers1, ...players2];

// const palyersFinal = [...palyers1, "Thiago", "Coutinho", "Preisic"];

// const { team1, x: draw, team2 } = game.odds;

// function printGoals(...players) {
//   console.log(players);
//   console.log(`${players.length} goals were scored.`);
// }

// // printGoals("Davies", "Muller", "Lewandowski", "Kimmich");

// //

// printGoals(...game.scored);

// team1 < team2 && console.log(`Team 2 is more likely to win`);

// team1 > team2 || console.log(`Team 1 is more likely to win.`);

// console.log(team1, draw, team2);

// 1.

// for (const [goalNumber, playerName] of game.scored.entries()) {
//   console.log(`Goal ${goalNumber + 1}: ${playerName}`);
// }

// //

// let sumTotal = 0;

// for (const [team, number] of Object.entries(game.odds)) {
//   sumTotal += number;

//   console.log(
//     `Odd of ${team == "x" ? "draw" : "victory "}${game[team] ?? ""} ${number}`
//   );
// }

// console.log(sumTotal / Object.entries(game.odds).length);

// const obj = {};

// for (const x of game.scored) {
//   if (obj[x]) {
//     obj[x] += 1;
//   } else {
//     obj[x] = 1;
//   }
// }

// console.log(obj);

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

// gameEvents.delete(64);

// console.log(gameEvents);
// const events = [...new Set(gameEvents.values())];

// console.log(events);

// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes.`
// );

// const time = [...gameEvents.keys()].pop();

// console.log(time);

// console.log(
//   `An event happened, on average, every ${time / gameEvents.size} minutes.`
// );

// for (const [min, event] of gameEvents) {
//   const half = min <= 45 ? "FIRST" : "SECOND";
//   console.log(`[${half} HALF] ${min}: ${event}`);
// }

//

/*

const btn = document.querySelector("[type=submit]");

btn.addEventListener("click", createText);

underscore_case
  first_name
Some_Variable
  calculate_AGE
delayed_departure


*/

/*

function createText(e) {
  e.preventDefault();

  const txt = document.querySelector("textarea").value;

  const getTxt = txt.split("\n");

  for (const [i, x] of getTxt.entries()) {
    const [first, second] = x.trim().toLowerCase().split("_");

    const txt = second.replace(second[0], second[0].toUpperCase());

    console.log(
      first
        .concat(txt)
        .padEnd(20, " ")
        .concat("✅".repeat(i + 1))
    );
  }
}

*/

// String methods Practice

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao9376619;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// 🔴 Delayed Daparture from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
// 🔴 Delayed Daparture from FAO to TXL (11h25)
//            Departure from FAO to LTS (12h30)

/*
const getTxt = flights.split("+");

console.log(getTxt);

const makeUp = (txt) => txt.slice(0, 3).toUpperCase();

for (const x of getTxt) {
  // console.log(x.split(";"));
  const [con, from, to, hour] = x.split(";");

  const finalTxt = `${con.startsWith("_Delay") ? "🔴 " : ""}${con.replaceAll(
    "_",
    " "
  )} from ${makeUp(from)} to ${makeUp(to)} (${hour.replace(
    ":",
    "h"
  )})`.padStart(50);

  console.log(finalTxt);
}

*/
