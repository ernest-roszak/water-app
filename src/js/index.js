import "../scss/main.scss";

// uncomment the lines below to enable PWA
import { registerSW } from "./pwa.js";
registerSW();

/* place your code below */

const glass = document.querySelector(".glass--js");
const add = document.querySelector(".add--js");
const minus = document.querySelector(".minus--js");
const info = document.querySelector(".info--js");
let result = document.querySelector(".result--js");
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


// for (let index = 0; index < array.length; index++) {
    
//     const test = Object.entries(localStorage)
// result.innerHTML = test;
//     console.log(test);

//     const newEl = document.createElement("div");
// result.innerText = array[index];
// }

// const test = Object.entries(localStorage)
// result.innerHTML = test;
//     console.log(test);

//     const newEl = document.createElement("div");
// result.innerText = "przykładowy tekst";

// show.addEventListener("click", () => {
// const history = `Data: ${key} - ${sum} szklanek`;
// result.innerHTML = history;
// });

// var i;

// for (i = 0; i < localStorage.length; i++)   {
//   const test = (localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]");
//     result.innerHTML = test;
//     console.log(localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]");
// };

// for(Object.entries(localStorage)
    
    
//     var value = localStorage[test];
//     test = document.createElement("div");
//     result.innerHTML = (test + " => " + value);
// }

for (let i = 0; i < localStorage.length; i++) {
    console.log(i);
document.createElement("div").innerHTML = Object.entries(localStorage)[i];
let testObject = Object.entries(localStorage);
console.log(testObject);
result.innerHTML = Object.entries(localStorage)[i];
console.log(i);
}
// // Put the object into storage
// localStorage.setItem('testObject', JSON.stringify(testObject));

// // Retrieve the object from storage
// var retrievedObject = localStorage.getItem('testObject');

// console.log('retrievedObject: ', JSON.parse(retrievedObject));