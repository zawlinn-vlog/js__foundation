'use strict';

// console.log(accounts);

// const reg = /fuck/;
// const str = 'Get the fuckOut of here.';

// const result = reg.exec(str); // return index
// const result = reg.test(str); // return true

// const result = str.match(reg); // return index
// const result = str.search(reg); // return index only

// console.log(result);

/* 


secret => literal chars
MetaChracter Symbol

^ Start With
$ End With
^..$ Only
^h.llos$ Any Character
h*llo Zero or More Char
gre?a?y e or a optional
^gre?a?y\?

*/

/*

Bracket - [] => Character Set

/^gr[ae]y$/i //  a or e any one or no one both
/^[GF]ray$/i // G or F uppercase
/^[^GF]ray$/i // anything not G or F uppercase
/^[A-Z]ray$/i // any uppercase letter
/^[a-z]ray$/i // any lowercase letter
/^[A-Za-z0-9]ray$/i // any uppercase letter


// Braclet - {} => Qualifier

/Hel{2}o/i // must occour two l
/Hel{2,4}o/i // must occour two to four l
/Hel{2,}o/i // must occour least 2 times



// Parentheses - {} => Grouping

/[0-9]x{3}/ // mean number after x three times
/([0-9]x){3}/ // mean 0-9 after x and 0-9 after x and 0-9 after x

re = /^([0-9]x){3}$/;

Shorthand Character Classes

/\w/ // word character, alpha numeric character
/\w+/ // one or more word character
/\W/ // none word character
/\d/ // any digit character
/\d+/ // one or more digit character
/\D/ // none digit character
/\s/ // any white space character
/\S/ // any none-white-space character
/Hello\b/i // word-boundary


// Assertion
/x(?=y)/ // match x if only it is fllow by y
/x(?!y)/ // match x if only it is not follow by y

*/

// function check(re, str) {
//   if (re.test(str)) {
//     console.log(`${str} match ${re.source}`);
//   } else {
//     console.log(`${str} not match ${re.source}`);
//   }
// }

// A-Z a-z _ => word character
// let str = 'xb';
// let reg = /x(?!y)/;

// check(reg, str);

// GET DOM ELEMENTs

const loginUsername = document.querySelector('#loginUserName'),
  loginUserLabel = document.querySelector('#loginUserLabel'),
  loginPinLabel = document.querySelector('#loginPinLabel'),
  userDataContainer = document.querySelector('.user__data');

const mainWrapper = document.querySelector('.main'),
  currentPrice = document.querySelector('.current__price'),
  navbar__brand = document.querySelector('.navbar__brand'),
  incomeTotal = document.querySelector('#total__income'),
  outcomeTotal = document.querySelector('#total__outcome'),
  interestTotal = document.querySelector('#total__interest'),
  clAccountPin = document.querySelector('#closePin');

const transferUsername = document.querySelector('#transferUserName');

export const transferBtn = document.querySelector('#transferBtn'),
  loginPIN = document.querySelector('#loginPin'),
  submit__l = document.querySelector('#login__submit'),
  transferAmount = document.querySelector('#transferAmount'),
  sortMov = document.querySelector('#sort'),
  cluserName = document.querySelector('#closeUserName'),
  clAccountBtn = document.querySelector('#close__btn'),
  loanAmount = document.querySelector('#loanAmount'),
  loanBtn = document.querySelector('#l__submit'),
  loginSession = document.querySelector('.logout__session-duration');

// DATA

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2,
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:12.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
};

// createEl(account1.movements);

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  movementsDates: [
    '2019-11-18T21:31:12.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -100, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  movementsDates: [
    '2019-11-18T21:31:12.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
};

const account4 = {
  owner: 'Smith William',
  movements: [100, -50, 430, -320, -25, 500, 4000, -450],
  interestRate: 0.7,
  pin: 4444,
  movementsDates: [
    '2019-11-18T21:31:12.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
};

const curriencies = new Map([
  ['USD', 'United States Dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound Sterling'],
]);

const accounts = [account1, account2, account3, account4];

const propos = new WeakMap();

class Accounts {
  constructor(accounts) {
    propos.set(this, {
      accounts,
      currentAccount: '',
      currentTotal: '',
      sort: false,
      timer: '',
      createUsr() {
        this.accounts.map(usr => {
          usr.username = usr.owner
            .split(' ')
            .map(u => u.slice(0, 1))
            .join('')
            .toLowerCase();
        });
      },
    });

    propos.get(this).createUsr();
  }

  getAccounts() {
    return propos.get(this).accounts;
  }

  defaultInit() {
    userDataContainer.textContent = '';
    mainWrapper.classList.add('d__none');
    incomeTotal.textContent = 0.0;
    outcomeTotal.textContent = 0.0;
    interestTotal.textContent = 0.0;
    propos.get(this).sort = false;
    navbar__brand.textContent = 'Login to get started';
  }

  displayList(mov) {
    userDataContainer.textContent = '';
    mov.map((mov, idx) => {
      let html = `
               <div class="user__items d__flex">
                <div class="user__action">
                  <span class="user__badge user__${
                    mov > 0 ? 'deposite' : 'withdraw'
                  }"> ${idx + 1} ${mov > 0 ? 'deposite' : 'withdraw'}</span>
                  <span class="user__action-date">31/07/2024</span>
                </div>
                <p class="user__amounts">${mov}€</p>
              </div>
          `;

      userDataContainer.insertAdjacentHTML('beforeend', html);
    });
  }
}

class InitBanking extends Accounts {
  constructor(accounts) {
    super(accounts);
  }
  // button Control

  btnCtrl() {
    if (loginPIN.value.length == 4 && loginPIN.value) {
      submit__l.classList.remove('btn__disabled');
      submit__l.removeAttribute('disabled');
    } else {
      submit__l.classList.add('btn__disabled');
      submit__l.setAttribute('disabled', true);
    }
  }

  // LOGIN FUNCTION

  login() {
    propos.get(this).currentAccount = propos
      .get(this)
      .accounts.find(
        usr => usr.username == loginUsername.value.trim().toLowerCase()
      );

    //
    if (
      propos.get(this).currentAccount &&
      propos.get(this).currentAccount.pin == loginPIN.value.trim()
    ) {
      if (propos.get(this).timer) clearInterval(propos.get(this).timer);

      loginPIN.value = loginUsername.value = '';
      navbar__brand.textContent = `Welcome Back, ${
        propos.get(this).currentAccount.owner.split(' ')[0]
      }`;

      mainWrapper.classList.remove('d__none');

      propos.get(this).sort = false;

      // console.log(propos.get(this).currentAccount.movements.sort((a,b) => a - b));

      this.uiUpdate();

      this.lsession();
    }
  }

  // UI UPDATE
  uiUpdate() {
    this.displayList([...propos.get(this).currentAccount.movements].reverse());

    console.log(propos.get(this).currentAccount.movements);

    this.currentTotal();

    incomeTotal.textContent =
      propos
        .get(this)
        .currentAccount.movements.filter(mov => mov > 0)
        .reduce((acc, cur) => acc + cur, 0) + '€';

    outcomeTotal.textContent =
      propos
        .get(this)
        .currentAccount.movements.filter(mov => mov < 0)
        .reduce((acc, cur) => acc + cur, 0) + '€';

    interestTotal.textContent =
      (
        propos
          .get(this)
          .currentAccount.movements.reduce((acc, cur) => acc + cur, 0) *
        (propos.get(this).currentAccount.interestRate / 100)
      ).toFixed(2) + '€';
  }

  //

  currentTotal() {
    propos.get(this).currentTotal = propos
      .get(this)
      .currentAccount.movements.reduce((acc, cur) => acc + cur, 0);
    currentPrice.textContent = propos.get(this).currentTotal + '€';
  }

  // SORTING FUNCTION

  sortList() {
    propos.get(this).sort = propos.get(this).sort ? false : true;
    console.log(propos.get(this));

    const sortmov = [...propos.get(this).currentAccount.movements].sort(
      (a, b) => a - b
    );

    propos.get(this).sort
      ? this.displayList(sortmov.reverse())
      : this.displayList(propos.get(this).currentAccount.movements.reverse());

    console.log(propos.get(this).currentAccount.movements);
  }

  //

  disabletBtn() {
    transferAmount.value
      ? transferBtn.removeAttribute('disabled')
      : transferBtn.setAttribute('disabled', true);
    transferBtn.classList.remove('btn__disabled');
  }

  // TRANSFER ACCOUNT

  transfer() {
    const transferAcc = propos
      .get(this)
      .accounts.find(usr => usr.username == transferUsername.value.trim());

    if (
      transferAcc &&
      transferAcc != propos.get(this).currentAccount &&
      Number(transferAmount.value) < propos.get(this).currentTotal
    ) {
      transferAcc.movements.push(Number(transferAmount.value));

      propos
        .get(this)
        .currentAccount.movements.push(Number(`-${transferAmount.value}`));

      console.log(propos.get(this).currentAccount.movements);

      this.uiUpdate();

      transferAmount.value = transferUsername.value = '';
    }
  }

  // LOAN ACCOUNT

  loanAccount() {
    const lAmount = Number(loanAmount.value);
    // console.log(Math.max(...propos.get(this).currentAccount.movements
    // ));

    console.log([...propos.get(this).currentAccount.movements].min());
    const maxVal = [...propos.get(this).currentAccount.movements].max();

    if (lAmount < maxVal * 0.1) {
      propos.get(this).currentAccount.movements.push(lAmount);

      this.uiUpdate();
    }
  }

  // Delete ACCOUNT

  delAccount() {
    const clAccount = propos
      .get(this)
      .accounts.find(usr => usr.username == cluserName.value.trim());
    if (
      clAccount &&
      clAccount.username == propos.get(this).currentAccount.username &&
      clAccount.pin == clAccountPin.value.trim()
    ) {
      const stIdx = propos
        .get(this)
        .accounts.findIndex(usr => usr.username == clAccount.username);

      propos.get(this).accounts.splice(stIdx, 1);
    }
  }

  // LOGIN SESSION

  lsession() {
    let timeSession = 300;

    propos.get(this).timer = setInterval(() => {
      let min = Math.floor(timeSession / 60);
      let sec = timeSession % 60;

      timeSession--;

      loginSession.textContent = `${min < 10 ? '0'.concat(min) : min} : ${
        sec < 10 ? '0' + sec : sec
      }`;

      console.log(`${min} : ${sec < 10 ? '0' + sec : sec}`);

      if (timeSession < 0) {
        clearInterval(propos.get(this).timer);
        console.log("Time's up!");
        this.defaultInit();
      }
    }, 1000);
  }
}

Array.prototype.max = function () {
  return Math.max.apply(null, this);
};

Array.prototype.min = function () {
  return Math.min.apply(null, this);
};

const bank = new InitBanking(accounts);
export default bank;

/*

let currentUser,
  sort = false;

const createUserDataLists = acc => {
  // console.log(acc);
  userDataContainer.innerHTML = '';

  const mov = sort
    ? acc.movements.sort((a, b) => a - b).slice('')
    : [...acc.movements];

  // mov.push(10000);

  // console.log(acc.movements, mov);

  mov.forEach((mov, i) => {
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

// createUserDataLists(account1);

/*  CREATE USER NAME FOR ALL ACCOUNTs */

/*
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

// CHECK FUN;

function checkSpell(reg, str, el) {
  // console.log(el);
  if (!reg.test(str)) {
    el.classList.add('border__secondary');
    return -1;
  }

  // check class
  el.classList.contains('border__secondary') &&
    el.classList.remove('border__secondary');
  el.classList.add('border__primary');
}

loginUsername.addEventListener('keyup', function () {
  // const reg = /\W/;
  const reg = /^[A-Za-z]+$/;
  const data = this.value;

  //

  checkSpell(reg, data, this);

  // DISABLE ENABLE BTNs

  disableBtn(loginUsername.value && loginPIN.value, submit__l);
});

loginPIN.addEventListener('keyup', function () {
  const reg = /^[0-9]{4}$/;
  const data = this.value;

  // CHECKING SPELL

  checkSpell(reg, data, this);

  // DISABLE ENABLE BTNs

  disableBtn(loginUsername.value && loginPIN.value, submit__l);
});

// disable Button

function disableBtn(con, el) {
  if (con) {
    el.removeAttribute('disabled');
    el.style.cursor = 'pointer';
  } else {
    el.setAttribute('disabled', '');
    el.style.cursor = 'not-allowed';
  }
}

submit__l.addEventListener('click', function (e) {
  e.preventDefault();

  //

  const userName = loginUsername.value.toLowerCase();
  const userPass = Number(loginPIN.value);

  //

  clearContent([loginUsername, loginPIN]);

  //

  currentUser = checkUser(userName, userPass);

  // IF NO CURRENTUSER program end

  if (!currentUser) return false;

  console.log(currentUser);

  updateUI(currentUser);

  // CHECK DATABASE
});

// UPDATE UI

const navbrand = document.querySelector('.navbar__brand');

function updateUI(acc) {
  createUserDataLists(acc);

  navbrand.textContent = `Welcome back, ${acc.owner.split(' ')[0]}`;
  currentUser.currentTotalAmount = acc.movements.reduce(
    (acc, cur) => acc + cur,
    0
  );

  currentPrice.textContent = `${currentUser.currentTotalAmount}€`;
  incomeTotal.textContent = `${total(acc, true)}€`;
  outcomeTotal.textContent = `${Math.abs(total(acc, false))}€`;

  interestTotal.textContent = `${interest(acc)}€`;
}

// DISPLAY TOTAL

function total(acc, m) {
  if (m)
    return acc.movements
      .filter(mov => mov > 0)
      .reduce((acc, cur) => acc + cur, 0);
  else
    return acc.movements
      .filter(mov => mov < 0)
      .reduce((acc, cur) => acc + cur, 0);
}

//

function interest(acc) {
  return acc.movements
    .filter(mov => mov > 0)
    .map(m => (m * acc.interestRate) / 100)
    .filter(m => m > 1)
    .reduce((acc, cur) => acc + cur, 0)
    .toFixed(2);
}

// function displayData(acc){

// }

const findUser = name => accounts.find(acc => acc.userName === name);

function checkUser(name, pin = '') {
  let user = findUser(name);
  // let user = accounts.find(acc => acc.userName === name);

  // CHECK USER AND PASS

  if (!user) {
    alert('Username was wrong!');
    displayWrapper(false);
  } else if (user && user.pin !== pin) {
    alert('Password was wrong!');

    displayWrapper(false);
  } else {
    displayWrapper();
    return user;
  }
}

//

function displayWrapper(con = true) {
  if (con) mainWrapper.classList.remove('d__none');
  else mainWrapper.classList.add('d__none');
}

sortMov.addEventListener('click', () => {
  sort = !sort;
  createUserDataLists(currentUser);
});

//

function clearContent(arr) {
  // console.log(arr);
  arr.forEach(el => (el.value = ''));

  arr[arr.length - 1].blur();
}

// const revNum = account1.movements.sort((a, b) => b - a);

// console.log(revNum);

transferUsername.addEventListener('keyup', function () {
  // console.log(this);
  const reg = /^[A-Za-z]+$/;
  const data = this.value;

  //

  checkSpell(reg, data, this);

  disableBtn(this.value, transferBtn);
});

// PRESS TRANSFER BTNs

transferBtn.addEventListener('click', function (e) {
  e.preventDefault();

  let name = transferUsername.value;
  let amount = Number(transferAmount.value);

  console.log(name, amount);

  let user = findUser(name);

  console.log(user);

  if (
    name !== '' &&
    amount !== '' &&
    amount <= currentUser.currentTotalAmount - 100 &&
    user &&
    user.userName !== currentUser.userName
  ) {
    // PUSH AMOUNT TO CURRENT USER

    currentUser.movements.push(-amount);

    // PUSH AMOUNT TO TRANSFER USER

    user.movements.push(amount);

    // UPDATE UI

    updateUI(currentUser);

    clearContent([transferUsername, transferAmount]);
  }
});

const loanAmount = document.querySelector('#loanAmount'),
  loanBtn = document.querySelector('#l__submit');

loanAmount.addEventListener('keyup', function () {
  disableBtn(this.value, loanBtn);
});

loanBtn.addEventListener('click', function (e) {
  e.preventDefault();

  const lAmount = Number(loanAmount.value);

  console.log(
    lAmount * 0.1,
    currentUser.movements.some(mov => mov > lAmount * 0.1)
  );

  if (
    lAmount !== '' &&
    currentUser.movements.some(mov => mov >= lAmount * 0.1)
  ) {
    currentUser.movements.push(lAmount);

    updateUI(currentUser);

    clearContent([loanAmount]);
  }
});

//

const closeUserName = document.querySelector('#closeUserName'),
  closePin = document.querySelector('#closePin'),
  closeBtn = document.querySelector('#close__btn');

closeUserName.addEventListener('keyup', function () {
  // checkSpell()t
  let data = this.value;

  const reg = /^[A-Za-z]+$/;
  checkSpell(reg, data, this);

  disableBtn(this.value && closePin.value, closeBtn);
});

closePin.addEventListener('keyup', function () {
  let data = Number(this.value);

  const reg = /^[0-9]{4}$/;

  checkSpell(reg, data, this);

  disableBtn(this.value && closeUserName.value, closeBtn);
});

closeBtn.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    closeUserName.value === currentUser.userName &&
    Number(closePin.value) === currentUser.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.userName === closeUserName.value
    );
    console.log(index);
    accounts.splice(index, 1);

    mainWrapper.classList.add('d__none');
  }

  clearContent([closeUserName, closePin]);
});

// WORKING with DATEs

const future = new Date(2037, 10, 19, 15, 20);

console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime()); // Milli Second

console.log(new Date(2142231600000));
console.log(Date.now());

console.log(new Date(account1.movementsDates[0]));

future.setFullYear(2040);

console.log(future);
*/
