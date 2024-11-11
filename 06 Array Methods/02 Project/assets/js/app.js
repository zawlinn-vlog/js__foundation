"use strict";

const submitBtn = document.querySelector(".btn-submit");

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const form = document.querySelector("form");
  console.log(form.noValidate);
});
