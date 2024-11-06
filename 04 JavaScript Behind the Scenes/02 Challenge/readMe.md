### Challenge #1

- We're building a football betting app (soccer for my American friends 😊)!

- Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. SO here are your tasks:

1. Create one player array for each team (variables `players1` and `players2`)

2. The first player in any player array is the goalkeeper and the others are field players.For Bayern Munich (team 1) create on variable (`gk`) eith the goalkeeper's name, and one array (`fieldPlayers`) with all the remaining 10 field players

3. Create an array `allPlayers`containing all players of both teams (22 players)

4. During the game, Bayern Munich (team 1) used 3 substitue palyers. So create a new array (`players1Final`) containing all the original team1 players plus `Thiago`, `Coutinho` and `Perisic`

5. Based on the game.adds object, create one variable for each odd (called `team1`, `draw` and `team2`)

6. Write a function (`printGoals`) that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals who were scord (number of player names passed in)

7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using on if/else statement or the ternary operator.

TEST DATA FOR 6: Use players `Davies`, `Muller`, `Lewandowski` and `Kimmich`. Then, call the function again with players from game.scored

### Challenge #2

Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")

2. Use a loop to calculate the average odd and log it to the console (we already studied how to calculate averages, you can check if you don't remember)

3. Print the 3 odds to the conosle, but in a nice fomatted way, exactly like this:

- Odd of victory Bayern Mumich : 1.33
- Odd of draw 3.25
- Odd of victory Borrussia Dortmund: 6.5

Get the tem names directly from the game object, don't hardcode them (except for 'draw'). HINT: Note how to odds and the game objects have the same property names 😊😊😊

BONUS: Create an object called `scored` which contains the name of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:

```js
  {
    Gnarby: 1,
    Hummels: 1,
    Lewandowski: 1
  }
```

### Challenge #3

- Let's continue with our football beeting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a Football game has 90 minutes plus some extra time).

1. Create an array `events` of the different game events that happend (no duplicates)

2. After the game has finished, is was found that the yellow card form minute 64 was unfair. So remove this event from the game event log.

3. Print the following string to the console: "A event that a game has 90 minutes" (keep in mind that a game has 90 minutes)

4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:

[FIRST HALF] 17: ⚽️ Goal

GOOD LUCK 😊

### Coding Challenge #4

- Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

- The input will come from a textarea inserted into the DOM (see code below), and conversation will happen when the button is pressed.

> THIS TEST DATA (pasted to textarea);

```txt
  underscore_case
    first_name
  Some_variable
    calculate_AGE
  delayed_departure
```

- SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)

```txt
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅
```
