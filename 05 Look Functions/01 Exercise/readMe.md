### First-class vs. Higher-Order Functions &mdash;

FIRST-CLASS FUNCTIONs &mdash;

- JavaScript treats functions as `first-class citizens`
- This means that functions are `simply values`
- Functions are just another `"Type" of object.`

  👉 <b>Store functions in variables or properties: </b>

  ```js
  const add = (a, b) => a - b;
  ```

  ```js
  const counter = {
    value: 23,
    inc: function () {
      this.value++;
    },
  };
  ```

  > like a simple value

  👉 <b> Pass functions as arguments to OTHER functions: </b>

  ```js
  const greet = () => console.log("Hey Jonas");
  btnClose.addEventListener("click", greet);
  ```

  > <mark>greet</mark> is `first-class` functions

  👉 <b> Return functions FROM functions </b>
  👉 <b> Call methods on functions: </b>

  ```js
  counter.inc.bind(someOtherObject);
  ```

  > type of object

  HIGHER-ORDER FUNCTIONs &mdash;

  - A function that `receives` another function as an argument, that `returns` a new function, or `both`

  - This is only possible because of first-class functions

  👉 <b> Function that receive another functions: </b>

  ```js
  const greet = () => console.log("Hey Jonas");
  btnClose.addEventListener("click", greet);
  ```

  > <mark>addEventListener</mark> is `Higher-order` function and <mark>greet</mark> is `callback` function

  👉 <b> Function that `returns` another functions: </b>

  ```js
  function count() {
    let counter = 0;

    return function () {
      counter++;
    };
  }
  ```

  > <mark>count</mark> is `Higher-order` function and another function is `returned` function
