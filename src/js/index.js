import "../scss/main.scss";

// uncomment the lines below to enable PWA
import { registerSW } from "./pwa.js";
registerSW();

/* place your code below */

// Variables

const glass = document.querySelector(".glass--js");
const add = document.querySelector(".add--js");
const minus = document.querySelector(".minus--js");
const info = document.querySelector(".info--js");
const done = document.querySelector(".done--js");
const hamburgerButton = document.querySelector(".navigation__button--js");
const closeButton = document.querySelector(".aside__button--js");
const asideMenu = document.querySelector(".aside");
const asideGlass = document.querySelector(".glass");
const water = document.querySelector(".water--js");
const select = document.querySelector(".asiede__select--js");
const goalButton = document.querySelector(".goal__button--js");
const asideHistoryHTMLElement = document.querySelector(".aside__history");
const key = new Date().toLocaleString().slice(0, 10);
const keyValue = localStorage.getItem(key);
let sum = keyValue;

// Glass number

if (keyValue) {
  sum = keyValue;
  water.style.opacity = 0.1;
} else {
  localStorage.setItem(key, 0);
  glass.innerHTML = `0`;
}
if (sum > 9) {
  glass.classList.add("glass__content--duble");
}
// Goal settings
let myGoal = JSON.parse(localStorage.getItem("select")) || [];

function addValue() {
  localStorage.setItem("select", JSON.stringify(myGoal));
}

function save() {
  localStorage.getItem("select", goal);
  const save = goal.value;

  myGoal = save;
}

console.log(addValue);
console.log(myGoal);

goalButton.addEventListener("click", () => {
  goalButton.classList.toggle("buttons--active");
  setTimeout(() => goalButton.classList.toggle("buttons--active"), 200);
  let goal = select.value;
  console.log(goal);
  localStorage.setItem("select", goal);

  save();
});

// Opacity settings
const progress = () => {
  water.style.opacity = `${progress}%`;
  const progress = (sum / myGoal) * 100;

  if (progress <= 20) {
    water.style.opacity = 0.2;
  } else if (progress <= 40) {
    water.style.opacity = 0.3;
  } else if (progress <= 60) {
    water.style.opacity = 0.4;
  } else if (progress <= 70) {
    water.style.opacity = 0.5;
  } else if (progress <= 80) {
    water.style.opacity = 0.6;
  } else if (progress <= 90) {
    water.style.opacity = 0.7;
  } else {
    water.style.opacity = 1;
  }
  if (progress >= 100) {
    done.innerHTML = `Congratulations, you have achieved your goal today :)`;
  } else if (progress < 100) {
    done.innerHTML = ``;
  }

  console.log(progress);
};

// Buttons add/remove

add.addEventListener("click", () => {
  add.classList.toggle("buttons--active");
  setTimeout(() => add.classList.toggle("buttons--active"), 200);
  sum++;
  glass.innerHTML = `${sum}`;
  progress();

  save();
  console.log("select");
  console.log(myGoal);
  console.log(goal.value);

  localStorage.setItem(key, sum);

  if (sum != 0) {
    info.innerHTML = ``;
  }
  if (sum > 9) {
    glass.classList.add("glass__content--duble");
  }
});

minus.addEventListener("click", () => {
  minus.classList.toggle("buttons--active");
  setTimeout(() => minus.classList.toggle("buttons--active"), 200);
  save();
  if (sum > 0) {
    sum = parseInt(sum) - 1;
    glass.innerHTML = `${sum}`;

    progress();
  } else {
    info.innerHTML = `ℹ️ You don't have any glass yet. First, add a glass of water`;
  }
  if (sum < 10) {
    glass.classList.remove("glass__content--duble");
  }
  localStorage.setItem(key, sum);
});

// History of glasses

const result = () => {
  const values = [];
  const keys = Object.keys(localStorage);
  let i = keys.length;
  while (i--) {
    values.push({
      data: keys[i],
      value: localStorage.getItem(keys[i]),
    });
  }
  values.forEach((item) => {
    if (item.data.length == 10) {
      const p = document.createElement("p");
      p.innerHTML = `On ${item.data}, you drank ${item.value} glasses of water`;
      p.classList.add("aside__item");
      asideHistoryHTMLElement.appendChild(p);
    }
  });
};

// Hamburger menu

hamburgerButton.addEventListener("click", () => {
  asideMenu.classList.toggle("aside--active");
  asideGlass.classList.toggle("glass--active");
  result();
});

closeButton.addEventListener("click", () => {
  asideMenu.classList.toggle("aside--active");
  asideGlass.classList.toggle("glass--active");
  asideHistoryHTMLElement.innerHTML = " ";
  // showClients();
});
const Data = () => {
  const values = [];
  const keys = Object.keys(localStorage);
  let i = keys.length;
  while (i--) {
    values.push({
      data: keys[i],
      value: localStorage.getItem(keys[i]),
    });
  }
  values.forEach((item) => {
    if (item.data.length == 10) {
      const p = document.createElement("p");
      p.innerHTML = `${item.data}: Sklep odwiedziło ${item.value} klientów`;
      p.classList.add("aside__item");
      asideHistoryHTMLElement.appendChild(p);
    }
  });
};
