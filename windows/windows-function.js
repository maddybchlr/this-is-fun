const el1 = document.querySelector("#module1");

el1.addEventListener("mousemove", (e) => {
  el1.style.setProperty('--x', -e.offsetX + "px");
  el1.style.setProperty('--y', -e.offsetY + "px");
});

const el2 = document.querySelector("#module2");

el2.addEventListener("mousemove", (e) => {
  el2.style.setProperty('--x', -e.offsetX + "px");
  el2.style.setProperty('--y', -e.offsetY + "px");
});

const el3 = document.querySelector("#module3");

el3.addEventListener("mousemove", (e) => {
  el3.style.setProperty('--x', -e.offsetX + "px");
  el3.style.setProperty('--y', -e.offsetY + "px");
});

const el4 = document.querySelector("#module4");

el4.addEventListener("mousemove", (e) => {
  el4.style.setProperty('--x', -e.offsetX + "px");
  el4.style.setProperty('--y', -e.offsetY + "px");
});

const el5 = document.querySelector("#module5");

el5.addEventListener("mousemove", (e) => {
  el5.style.setProperty('--x', -e.offsetX + "px");
  el5.style.setProperty('--y', -e.offsetY + "px");
});

const el6 = document.querySelector("#module6");

el6.addEventListener("mousemove", (e) => {
  el6.style.setProperty('--x', -e.offsetX + "px");
  el6.style.setProperty('--y', -e.offsetY + "px");
});
