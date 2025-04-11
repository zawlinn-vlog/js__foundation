## Strict Mode &mdash;

> `use strict` for a specific function or a specific block. should do it before coding in every script. to avoid accidental errors.

- First, strict mode forbids us to do certain things
- Seconde, it will actually create visible error for us in certain situations

### Function

- Function Declaration
- Function Expression
- Arrow Function (ES6)

#### Function Declaration &mdash;

- Function that can be used before it's declared.

```js
// Function Declaration

function person(name) {
  return `Hello! ${name}`;
}

const person1 = person("Aung Kyaw -");

console.log(`${person1} I am a Visitor who wanna visit in Thailand`);
```

- Function Name - Defined a name of function
- <b>Parameter</b> - Placeholders to receive input values. Like local variable of a function.
- <b>Function body</b> - block of code that we want to reuse. Processes the function's input data
- <b>return</b> statement to `output` a value from the function and terminate execution
- <b>Calling,</b> Running or invoking the function, using()
- <b>Arguments:</b> Actual values of funciton parameters, to `input` data

- <b>Variable</b> to save returned value (function output)

> Function Declaration can be <i>hoisted</i> &mdash;

#### Function Expression &mdash;

- Essentially a function value store in a Variable &mdash;

```js
// Function Expression

const student = function () {
  console.log("A body who study Thai language.");
};

student();
```

#### Function Arrow &mdash;

- Great for a quick one-line functions. Has no `this` keyword (more later...)

```js
// Arrow Function

const ageCal = (birthYear) => 2024 - birthYear;

const age = ageCal(1997);

console.log(`I am ${age} years old.`);
```

> Function Expression and Functon Arrow cannot be <i>hoisted</i> &mdash;

> Three different ways of writing functions, but they all work in a similar way, receive <b>input</b> data, <b>transform</b> data, and then <b>output</b> data.
