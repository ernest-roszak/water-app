!function(e){var t={};function o(n){if(t[n])return t[n].exports;var c=t[n]={i:n,l:!1,exports:{}};return e[n].call(c.exports,c,c.exports,o),c.l=!0,c.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)o.d(n,c,function(t){return e[t]}.bind(null,c));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=2)}([function(e,t,o){},,function(e,t,o){"use strict";o.r(t);o(0);"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("service-worker.js").then((function(e){console.log("ServiceWorker registration successful with scope: ",e.scope)}),(function(e){console.log("ServiceWorker registration failed: ",e)}))}));var n=document.querySelector(".glass--js"),c=document.querySelector(".add--js"),a=document.querySelector(".minus--js"),l=document.querySelector(".info--js"),s=document.querySelector(".done--js"),r=document.querySelector(".navigation__button--js"),i=document.querySelector(".aside__button--js"),u=document.querySelector(".aside"),d=document.querySelector(".glass"),g=document.querySelector(".water--js"),y=document.querySelector(".asiede__select--js"),f=document.querySelector(".goal__button--js"),v=document.querySelector(".aside__history"),p=(new Date).toLocaleString().slice(0,10),m=localStorage.getItem(p),S=m;n.innerHTML="".concat(S),m?(S=m,g.style.opacity=.1):localStorage.setItem(p,0),S>9&&n.classList.add("glass__content--duble"),console.log(y.value),console.log(g),f.addEventListener("click",(function(){var e=y.value;console.log(e),localStorage.setItem("select",e)})),c.addEventListener("click",(function(){c.classList.toggle("buttons--active"),setTimeout((function(){return c.classList.toggle("buttons--active")}),200),S++,n.innerHTML="".concat(S);var e=y.value,t=(localStorage.getItem(e),S/e*100);g.style.opacity="".concat(t,"%"),t<=20?g.style.opacity=.2:t<=40?g.style.opacity=.3:t<=60?g.style.opacity=.4:t<=70?g.style.opacity=.5:t<=80?g.style.opacity=.6:t<=90?g.style.opacity=.7:(g.style.opacity=1,s.innerHTML="Congratulations, you have achieved your goal today :)"),console.log(t),localStorage.setItem(p,S),0!=S&&(l.innerHTML=""),S>9&&n.classList.add("glass__content--duble")})),a.addEventListener("click",(function(){if(a.classList.toggle("buttons--active"),setTimeout((function(){return a.classList.toggle("buttons--active")}),200),S>0){S=parseInt(S)-1,n.innerHTML="".concat(S);var e=y.value,t=(localStorage.getItem(e),S/e*100);console.log(e),console.log(m),console.log(y.value),console.log(S),console.log(t),g.style.opacity="".concat(t,"%"),console.log(g.style.opacity),g.style.opacity=t<=20?.2:t<=40?.3:t<=60?.4:t<=70?.5:t<=80?.6:t<=90?.7:1,console.log(t),t<100&&(s.innerHTML="")}else l.innerHTML="ℹ️ You don't have any glass yet. First, add a glass of water";S<10&&n.classList.remove("glass__content--duble"),localStorage.setItem(p,S)}));r.addEventListener("click",(function(){u.classList.toggle("aside--active"),d.classList.toggle("glass--active"),function(){for(var e=[],t=Object.keys(localStorage),o=t.length;o--;)e.push({data:t[o],value:localStorage.getItem(t[o])});e.forEach((function(e){if(10==e.data.length){var t=document.createElement("p");t.innerHTML="On ".concat(e.data,", you drank ").concat(e.value," glasses of water"),t.classList.add("aside__item"),v.appendChild(t)}}))}()})),i.addEventListener("click",(function(){u.classList.toggle("aside--active"),d.classList.toggle("glass--active"),v.innerHTML=" "}))}]);