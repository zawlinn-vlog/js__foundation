//

"use strict";

import init, { navlinks as nlinks, cookie } from "./init.js";

const btnCookie = document.querySelector(".btn-cookie");

console.log(getComputedStyle(cookie));

// cookie.style.height =
//   Number.parseFloat(getComputedStyle(cookie).height, 10) + 5 + "px";

// console.log(cookie, btnCookie);

// Attributes

const logo = document.querySelector(".navbar-brand__img");

console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = "Beautiful minimalist logo";

// non-standard

console.log(logo.getAttribute("alt"));
console.log(logo.getAttribute("src"));

// Data attribute

console.log(logo.dataset.versionNumber);

// classes

logo.classList.add("c", "j");
logo.classList.remove("a");
logo.classList.toggle("b");
logo.classList.contains("c");

// don't use

// logo.className = "jonas";

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
