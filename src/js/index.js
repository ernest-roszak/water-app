import "../scss/main.scss";

// uncomment the lines below to enable PWA
import { registerSW } from "./pwa.js";
registerSW();

/* place your code below */

const glass = document.querySelector(".glass--js");
const add = document.querySelector(".add--js");
const minus = document.querySelector(".minus--js");
const info = document.querySelector(".info--js");

let sum = 0;

glass.innerHTML = `${sum}`;

add.addEventListener("click", () => {
  sum = sum + 1;
  glass.innerHTML = `${sum}`;
  console.log(sum);
  if (sum != 0) {
    info.innerHTML = ``;
  }
});

minus.addEventListener("click", () => {
  if (sum > 0) {
    sum = sum - 1;
    glass.innerHTML = `${sum}`;
    console.log(sum);
  } else {
    info.innerHTML = `ℹ️ You don't have any glass yet. First, add a glass of water`;
  }
});

for (sum = 0; i < 8; i++) {
  console.log("cel");
}
