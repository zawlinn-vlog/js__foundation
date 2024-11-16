"use strict";

// GET DOM

const inputUserName = document.querySelector("#username");
const inputPin = document.querySelector("#userPin");
const subBtn = document.querySelector("#submitBtn");
const mainEl = document.querySelector("main");
const listGp = document.querySelector(".list-group");
const currentAmount = document.querySelector(".current__amount");

console.log(currentAmount);

// CREATE ELEMENT

const createEl = function (movements) {
  movements.forEach((mov, i) => {
    let str = `
                <li class="list-group-item px-5 py-4">
                  <div class="row">
                    <div
                      class="col d-flex align-items-center gap-2"
                      
                    >
                      <span
                        class="badge text-bg-${
                          mov > 0 ? "success" : "danger"
                        } rounded-pill text-capitalize"
                        >${i + 1} ${mov > 0 ? "deposite" : "withdraw"}</span
                      >
                      <span class="date">12/03/2024</span>
                    </div>
                    <div class="col d-flex">
                      <p class="action__amount ms-auto p-0 m-0">${mov}</p>
                    </div>
                  </div>
                </li>
    
    `;

    listGp.insertAdjacentHTML("afterbegin", str);
  });
};

// DATA

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2,
  pin: 1111,
};

// createEl(account1.movements);

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -100, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Smith William",
  movements: [100, -50, 430, -320, -25, 500, 4000, -450],
  interestRate: 0.7,
  pin: 4444,
};

const curriencies = new Map([
  ["USD", "United States Dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound Sterling"],
]);

const accounts = [account1, account2, account3, account4];

// Put userAccount for All Accounts Function

const createAlluserAccount = function (account) {
  account.map((acc) => (acc.userName = createUserAccount(acc)));
};

//  Create userName Function

const createUserAccount = function (account) {
  return account.owner
    .toLowerCase()
    .split(" ")
    .map((n) => n[0])
    .join("");
};

// Call Functions

createAlluserAccount(accounts);

// CHECK ACCOUNTS

console.log(accounts);

// DECLARE CURRENT USER ACCOUNT

let currentAccount;

// INITIATE BUTTON FUNCTION

subBtn.addEventListener("click", init);

// INIT FUNCTION DECLARE

function init(e) {
  /* PREVENT DEFAULT */

  e.preventDefault();

  /*  input to current user account  */

  currentAccount = checkUserAccrount(inputUserName.value);

  console.log(currentAccount?.pin);

  if (currentAccount?.pin === Number(inputPin.value)) {
    // CLEAR INPUT DATA

    clearInputData();

    // SHOW LISTs

    listGp.textContent = "";

    createEl(currentAccount.movements);

    sumCurrentAmount(currentAccount.movements);

    // REMOVE SHOWN MAIN

    mainEl.classList.remove("d-none");
  }
}

// CHECK USERNAME AND PASSWORD

const checkUserAccrount = function (inputData) {
  return accounts.find((acc) => acc.userName === inputData);
};

// CLEAN INPUT DATA

const clearInputData = function () {
  inputUserName.value = "";
  inputPin.value = "";
};

// SHOW CURRENT AMOUNT

const sumCurrentAmount = function (movment) {
  currentAmount.textContent = movment.reduce((acc, mov) => acc + mov, 0);
};
