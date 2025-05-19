'use strict';

import Banking from './main.js';
import { submit__l, loginPIN } from './main.js';

// console.log(Banking);
// console.log(Banking.getAccounts());

// LOGIN BTN CONTROL
loginPIN.addEventListener('keyup', Banking.btnCtrl);

// PRESS SUBMIT BTN
submit__l.addEventListener('click', function (e) {
  e.preventDefault();
  Banking.login();
});
