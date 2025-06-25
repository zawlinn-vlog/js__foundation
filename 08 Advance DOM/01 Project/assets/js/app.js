//

"use strict";

import init, { navlinks as nlinks, cookie } from "./init.js";

const btnCookie = document.querySelector(".btn-cookie");

// console.log(cookie, btnCookie);

btnCookie.addEventListener("click", function () {
  init.closeEl(cookie);
});

for (let nlink of nlinks) {
  nlink.addEventListener("mouseover", function (e) {
    init.navFade(nlinks);
    init.navHover(e.target);
  });

  nlink.addEventListener("mouseout", function (e) {
    init.navNormal(nlinks);
  });
}
