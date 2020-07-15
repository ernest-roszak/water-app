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
const closeButton = document.querySelector(".asside__button--js");
const assideMenu = document.querySelector(".asside");
const assideGlass = document.querySelector(".glass");

const assideHistoryHTMLElement = document.querySelector(".asside__history");
const key = new Date().toLocaleString().slice(0, 10);
const keyValue = localStorage.getItem(key);
let sum = keyValue;

// Glass number

glass.innerHTML = `${sum}`;

if (keyValue) {
  sum = keyValue;
} else {
  localStorage.setItem(key, 0);
}
if (sum > 9) {
  glass.classList.add("glass__content--duble");
}

// Buttons add/remove

add.addEventListener("click", () => {
  add.classList.toggle("buttons--active");
  setTimeout(() => add.classList.toggle("buttons--active"), 200);
  sum++;
  glass.innerHTML = `${sum}`;

  let goal = select.value;
  const goalValue = localStorage.getItem(goal);
  const progress = (sum / goal) * 100;
  water.style.opacity = `${progress}%`;

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
    done.innerHTML = `Congratulations, you have achieved your goal today :)`;
  }

  console.log(progress);

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
  if (sum > 0) {
    sum = parseInt(sum) - 1;
    glass.innerHTML = `${sum}`;

    let goal = select.value;
    const goalValue = localStorage.getItem(goal);
    const progress = (sum / goal) * 100;
    console.log(goal);
    console.log(keyValue);
    console.log(select.value);
    console.log(sum);
    console.log(progress);

    water.style.opacity = `${progress}%`;
    console.log(water.style.opacity);
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

    console.log(progress);
    if (progress < 100) {
      done.innerHTML = ``;
    }
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
      p.classList.add("asside__item");
      assideHistoryHTMLElement.appendChild(p);
    }
  });
};

// Hamburger menu

hamburgerButton.addEventListener("click", () => {
  assideMenu.classList.toggle("asside--active");
  assideGlass.classList.toggle("glass--active");
  result();
});

closeButton.addEventListener("click", () => {
  assideMenu.classList.toggle("asside--active");
  assideGlass.classList.toggle("glass--active");
  assideHistoryHTMLElement.innerHTML = " ";
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
      p.classList.add("asside__item");
      assideHistoryHTMLElement.appendChild(p);
    }
  });
};

// Goal settings

const water = document.querySelector(".water--js");
const select = document.querySelector(".assiede__select--js");
const goalButton = document.querySelector(".goal__button--js");

console.log(select.value);
console.log(water);

goalButton.addEventListener("click", () => {
  let goal = select.value;
  console.log(goal);
  localStorage.setItem("select", goal);
});







// const goalValue = localStorage.getItem(goal);

//  if (keyValue) {
//      sum = keyValue;

//     console.log(goal);
//     console.log(keyValue);
//     console.log(sum);
//     console.log(progress);
//  }

// for (let cos of Object.entries(localStorage)) {
//     console.log(typeof Object.entries(localStorage));
//     const {...vars} = cos;
//     cos.shift();
//     const result = document.querySelector(".result--js");
//     const testObject = Object.entries(localStorage);

//     Object.entries(localStorage).shift();
//     const now = testObject.shift();
//     console.log(now)

//     const listItem = `<li> Data: ${vars[0]} liczba szklanek: ${vars[1]}</li>`;

//     result.innerHTML += listItem;
//     };
