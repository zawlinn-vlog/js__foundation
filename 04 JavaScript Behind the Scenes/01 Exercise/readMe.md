## What is JAVSCRIPT : REVISITED

> JavaScript is a `High-Level`, `Prototype-based` `Object-oriented`, `Multi-paradigm`, `Interpreted` Or `Just-in-Time Compiled`, `Dynamic`, `Single-Threaded`, `Garbage-collected` Programming Language with `First-class Functions` and a `Non-blocking Event Loop Concurrency Model`.

- High-level - low level language have to manually manage resources (CPU, RAM and etc.). eg. asing the computer's memory to create a new variable. high-levl does not have to do it.

- Garbage-collected - it is memory management. inside the js engine, which automatically removes old, unused objects from the computer's memory.

- Interpreted or Just-in-Time Compiled - computer cpu use compiling or interpreted convert human readable to machine code (0 and 1).

- Multi-paradigm - Paradigm is an approch and mindset of structing code, which will direct your coding style and technique.

  1. Procedual programming
  2. Object-oriented programming (OOP)
  3. Functional programming (FP)

  <br/>

- Impreative vs Declarative

- Prototype-based object-oriented - Prototype is an blueprint. array is build from prototype of array object and can inherit methods from prototype

```js
// Array
//     Array.prototype.push
//     Array.prototype.

const arr = [1, 2, 3]; // built from prototype

arr.push(4);

const hasZero = arr.indexOf(0) > -1; // inherit method from Array prototype
```

- First-class functions - In a language with `first-class functions`, functions are simply `treated as variables.` We can pass them into other functions, and return them from functions.

```js
const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

overlay.addEventListener("click", closeModal);
```

- Dynamic - Dynamically-typed the type of data types can be changed easily and reassign variables.

```js
let x = 23; // number
let y = 19; // number

x = "jonas"; // string
```

- Single-threaded -

- Non-blocking event loop -

> `Concurrency Modal` : how the JavaScript engine handles multiples tasks happening at the same time.

> JavaScript - runs in one `single thread`, so it can only do one thing at a time.(mean one thing at a time.) we need to handles multiple things happening at the same time.In computing a thread is like a set of instructions that is executed in the computer's CPU. what if there is a `long-running task` like `fetching data` from remote server, it is block single thread. That's why we want is so-called `non-blocking` behavior and by using a so-called event loop. The event loop takes long-running tasks, executes them in the `background` and then puts them back in the `main thread` once they are finished.

- JS Engine is build inside of JS runtime

- JS runtime in Web Browsers &mdash;

  1. JS Engine - call stack, heap
  2. Web APIs - DOM, Timers, Fetch API and etc. (access global window object)
  3. Callback Queue - call, timere, data and etc.

- JS runtime in Node.js &mdash;

  1. JS Engine - call stack, heap
  2. C++ Binding & Thread Pool
  3. Callback Queue - call, timere, data and etc.

- JS Engine

  1. Call Stack
  2. Heap

- `Compilation`: Entire code is converted into machine code at once, and written to a binary file that can be executed by a computer.

source code -> Protable file/portable file -> Program running

- `Interpretation`: Interpreter runs through the source code and executes it line by line. (much slower than compiler) old version ok but modern js not ok!

source code -> program running

- `Just-in-Time (JIT) compilation`: Entire code is converted into machine code at once, then executed immediately.

Source code -> Machine code/not a portable file -> Program running.

code -> Parsing(AST) -> compilation and execution

`first step` - parse the code, check each line that are meaningful to the language like const or function keywords. also checks if there are any syntax errors

`Next Step` - Compilation, generate and compiles it into machine code and executed right aways and execution happens in the js engine call stack. js actually have some pretty clever optimization strategies. what they do is to create a very unoptimized version of machine code in the beginning just so that it can start executing as fast as possible.Then in the background, this code is being optimized and recompiled during the already running program execution.And this can be done most of the times and after each optimization the unoptimized code is simply swept for the new more optimized code without ever stopping execution. all parsing, compilation and optimization happens in some special threads inside the engine that we cannot access from our code.So completely separate form the main thread that is basically running into call stack executing our own code.

AST - Abstract Syntax Tree

### What is an execution context?

1. Creation of global execution context (Global EC) (for top-level code)
2. Exectly `one` global execution context (EC): Default context, created for code that is not inside any function (top-level)
3. One execution context per function: For each functioncall, a new execution context is created.

- Exection Context - Environment in which a piece of javaScript is executed. Stores all the necessary information for some code to be executed.(such as local variables or arguments passed into a function.)
- JS code always runs inside an execution context.JS Project, no matter how large it is, there is only ever one global execution context and it's where top-level code will execute.

### What's inside execution context?

1. Variable Environment &mdash;

   - `let`, `const` and `var` declarations
   - Functions
   - Arguments object

2. Scope chain
3. `this` keyword

this three steps are generated in a so-called creation phase.

> In arrow function execution context (EC) do not have `Arguments Object` and `this` keywords but can access from their closest regular function parent.

### Hoisting in JavaScript

- `Hoisting` : Makes some types of variables accessible/usable in the code they are actually declared. 'Variable lifted to the top of their scope'

- `function`, let and const are block scope
- `var` is hoisted and initial vlaue is undefined and it's function scope
- `let` and `const` initial value are TDZ<uninitialized> and no Hoisted
- function expression and arrow - depends if using var or let/const

> TDZ - Temporal Dead Zone

1. Makes it easier to avoid and catch errors :
2. Makes const variable actually work

### How the `this` keyword works

- `this` keyword/variable : Special variable that is created for every execution context (every function). Takes the value of (points to) the "owner" of the function in which the `this` keyword is used.

- `this` is NOT static: It depends on how the function is called, and its value is only assigned when the function is actually called.

  > Method -> this = \<Object that is calling the method.\>

  > Simple Function call -> this => undefined. (!in strict modde! Otherwise window/global object (in the browser))

  > Arrow Function -> this => <this of surronding function(lexical this)\>

  > Event listener -> this => <DOM element that the handler is attached to\>

  > NOTE : this does NOT point to the function itself, and also NOT the variable environment!

### PRIMITIVES - Store in Call stack

1. Number
2. String
3. Boolean
4. Undefined
5. Null
6. Symbol
7. BigInt

### OBJECTs - Store in Heap - REFERENCE TYPE

1. Object literal
2. Arrays
3. Functions
4. Many more...
