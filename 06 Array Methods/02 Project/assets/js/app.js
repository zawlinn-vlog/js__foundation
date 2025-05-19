'use strict';

import Banking from './main.js';
import { submit__l, loginPIN } from './main.js';

console.log(Banking);
console.log(Banking.getAccounts());

loginPIN.addEventListener('keyup', _ => {
  if (loginPIN.value.length == 4 && loginPIN.value) {
    submit__l.classList.remove('btn__disabled');
    submit__l.removeAttribute('disabled');
  } else {
    submit__l.classList.add('btn__disabled');
    submit__l.setAttribute('disabled', true);
  }
});

submit__l.addEventListener('click', function (e) {
  e.preventDefault();
  Banking.login();
});

Banking.login();
