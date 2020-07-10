import "../scss/main.scss";

// uncomment the lines below to enable PWA
import { registerSW } from "./pwa.js";
registerSW();

/* place your code below */

const glass = document.querySelector(".glass--js");
const add = document.querySelector(".add--js");
const minus = document.querySelector(".minus--js");
const info = document.querySelector(".info--js");
const key = new Date().toISOString().slice(0, 10)

let sum = 0;

if (sum) {
    sum = localStorage.setItem(0);
} else {

};

glass.innerHTML = `${sum}`;

if (key) {
    localStorage.setItem("key", 0);
} else {
    
};

add.addEventListener("click", () => {
    localStorage.setItem("key", sum +1);
  sum = sum + 1;
  glass.innerHTML = `${sum}`;
  console.log(sum);
  if (sum != 0) {
    info.innerHTML = ``;
  }
  if (sum > 9) {
    glass.classList.add('glass__content--duble');
    }
});


minus.addEventListener("click", () => {
    localStorage.setItem("key", sum - 1);
  if (sum > 0) {
    sum = sum - 1;
    glass.innerHTML = `${sum}`;
    console.log(sum);
  } else {
    info.innerHTML = `ℹ️ You don't have any glass yet. First, add a glass of water`;
  }
  if (sum < 10) {
    glass.classList.remove('glass__content--duble');
    }
});


console.log(`to twoje ${key}`);
