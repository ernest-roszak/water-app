import "../scss/main.scss";

// uncomment the lines below to enable PWA
import { registerSW } from "./pwa.js";
registerSW();

/* place your code below */

const glass = document.querySelector(".glass--js");
const add = document.querySelector(".add--js");
const minus = document.querySelector(".minus--js");
const info = document.querySelector(".info--js");

const key = new Date().toLocaleString().slice(0, 10);
const show = document.querySelector(".show--js");

let sum = 0;
const keyValue = localStorage.getItem(key);


glass.innerHTML = `${sum}`;

if (keyValue) {
  sum = keyValue;
} else {
  localStorage.setItem(key, 0);
}

add.addEventListener("click", () => {
  sum++;
  glass.innerHTML = `${sum}`;
  localStorage.setItem(key, sum);
  if (sum != 0) {
    info.innerHTML = ``;
  }
  if (sum > 9) {
    glass.classList.add("glass__content--duble");
  }
});

minus.addEventListener("click", () => {
  
  if (sum > 0) {
    sum = parseInt(sum) - 1;
    glass.innerHTML = `${sum}`;
    } else {
    info.innerHTML = `ℹ️ You don't have any glass yet. First, add a glass of water`;
  }
  if (sum < 10) {
    glass.classList.remove("glass__content--duble");
  }
  localStorage.setItem(key, sum);
});





for (let cos of Object.entries(localStorage)) {
    console.log(Object.entries(localStorage));
    const {first, ...vars} = cos;

    const result = document.querySelector(".result--js");
    
    // result.innerHTML += Object.entries(localStorage)[i];
    let testObject = Object.entries(localStorage);
    const listItem = `<li> ${vars[0]} </li>`;
    console.log(vars);
    result.innerHTML += listItem;
};