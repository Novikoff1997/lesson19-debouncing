"use strict";

const input = document.querySelector("input");
const p = document.querySelector("p");

const debounce = (func, wait) => {
  let timeout;

  return (...args) => {
    const later = () => {
      clearTimeout(timeout);
      func.apply(this, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

const setText = debounce(() => {
  p.textContent = input.value;
  input.value = "";
}, 300);

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    setText();
  }
});
