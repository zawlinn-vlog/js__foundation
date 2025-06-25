//

"use strict";

export const navlinks = document.querySelectorAll(".navbar-link");

export const cookie = document.createElement("div");

cookie.classList.add("cookie");

cookie.innerHTML = `
  <p> We use cookied for improved functionality and analytics. </p>
  <button class="btn-cookie"> close </button>
`;

const header = document.querySelector(".header");

// document.documentElement.style.setProperty("--primary-color", "orange");

header.prepend(cookie);

console.log(cookie);

class Init {
  navFade(links) {
    for (let link of links) {
      link.classList.add("dark-50");
      console.log(link.closest(".navbar").children);
    }
  }

  navNormal(links) {
    for (let link of links) {
      link.classList.remove("dark-50");
    }
  }

  navHover(nav) {
    nav.classList.remove("dark-50");
  }

  closeEl(el) {
    // el.remove();
    el.parentElement.removeChild(el);
  }
}

const init = new Init();

export default init;
