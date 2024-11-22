'use strict';

// GET DOM ELEMENTs

const loginUsername = document.querySelector('#loginUserName');
const loginUserLabel = document.querySelector('#loginUserLabel');
const loginPIN = document.querySelector('#loginPin');
const loginPinLabel = document.querySelector('#loginPinLabel');
const submit__l = document.querySelector('#login__submit');
const userDataContainer = document.querySelector('.user__data');

// DATA

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2,
  pin: 1111,
};

// createEl(account1.movements);

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -100, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Smith William',
  movements: [100, -50, 430, -320, -25, 500, 4000, -450],
  interestRate: 0.7,
  pin: 4444,
};

const curriencies = new Map([
  ['USD', 'United States Dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound Sterling'],
]);

const accounts = [account1, account2, account3, account4];

const createUserDataLists = acc => {
  // console.log(acc);
  userDataContainer.innerHTML = '';
  acc.movements.forEach((mov, i) => {
    let html = `

    <div class="user__items d__flex">
      <div class="user__action">
        <span class="user__badge user__${mov > 0 ? 'deposite' : 'withdraw'}"> ${
      i + 1
    } ${mov > 0 ? 'deposite' : 'withdraw'}</span>
        <span class="user__action-date">31/07/2024</span>
      </div>
      <p class="user__amounts">${mov}€</p>
    </div>
`;

    userDataContainer.insertAdjacentHTML('afterbegin', html);
  });
};

createUserDataLists(account1);

/*  CREATE USER NAME FOR ALL ACCOUNTs */

(() => {
  accounts.map(acc => {
    let userName = acc.owner
      .toLowerCase()
      .split(' ')
      .map(n => n[0])
      .join('');

    acc.userName = userName;

    // console.log(userName);
  });
})();

// console.log(accounts);
