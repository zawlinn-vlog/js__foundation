### Challenge #1

- Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

> Here are your tasks:

1. Create a method called `registerNewAnser` on the `poll` object. The method does 2 things;

   1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:

   What is your favorite programming language?
   0: JavaScript
   1: Python
   2: Rust
   3: C++
   (Write option number)

   1.2. Based on the input number, updata the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g anser 52 wouldn't make sense, right?)

2. Call theis method whenever the user click the "Answer pool" button.

3. Create a method `displayResults` which displays the poll results. The method takes a string as an input (called `type`), which can be either `string` or `array`. If type is `array`, simply display the results array as it is, using console.log(). This sould be the defult option. If type is `string`, display a string like "Poll Result are 13, 2, 4, 1".

4. Run the `displayResults` method at the end of each `registerNewAnswer` method call.

HINT: Use many of the tools you learned about in this and the last section 😊

BONUS: Use the `displayResults` method to display the 2 arrays in the test data. Use both the `array` and the `string` option. DO NOT put the arrays in the poll object! So what should the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😊

### Challenge #2 &mdash;

This is more of a thinking challenge than a coding challenge 😊

Take the IIFE below anad at the end of the function, attach an event listener that changes the color of the selected h1 element (`header`) to blue, each time the BODY element is clicked, Do NOT select the h1 element again!

And now explain to YOURSELF (or some around you) Why this worked! Take all time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😊
