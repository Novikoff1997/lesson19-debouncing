"use strict";

const input = document.querySelector("input");
const div = document.querySelector("div");
const textStorage = [];

const debounce = (func, wait) => {
  let timeout;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(func, wait);
  };
};

const setText = debounce(() => {
  textStorage.push(input.value);
  div.innerHTML = "";
  let p = document.createElement("p");
  textStorage.forEach((element) => {
    p.textContent = element;
    document.body.appendChild(p);
  });
  input.value = "";
}, 300);

input.addEventListener("input", () => {
  setText();
});
