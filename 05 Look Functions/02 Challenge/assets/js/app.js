"use strict";

const poll = {
  question: ` What is your favorite programming language?
   `,
  options: [`0: JavaScript`, `1: Python`, `2: Rust`, `3: C++`],

  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}${this.options.join("\n")}\n (Write option number)`
      )
    );
    console.log(this.answers);

    typeof answer === "number" &&
      answer < this.options.length &&
      this.answers[answer]++;

    console.log(this.answers);
  },

  displayResult(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll result are ${this.answers.join(",")}`);
    }
  },
};

// // poll.registerNewAnswer();

// console.log(poll);

// document
//   .querySelector("body")
//   .addEventListener("click", poll.registerNewAnswer.bind(poll));

// poll.displayResult.call({ answers: [5, 2, 3] }, "string");

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";

  document
    .querySelector("body")
    .addEventListener("click", function changeColor() {
      header.style.color = "blue";
    });
})();
