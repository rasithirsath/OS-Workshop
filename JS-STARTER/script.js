"use strict";

//////////////////
//////// DOM MANIPULATION

const btn = document.querySelector(".changeBgBtn");
console.log(btn);

const heading = document.querySelector(".heading");
console.log(heading);

btn.addEventListener("click", function () {
  // Generate random RGB values
  const r = Math.floor(Math.random() * 226);
  const g = Math.floor(Math.random() * 226);
  const b = Math.floor(Math.random() * 226);

  // Create rgb string
  const rgbColor = `rgb(${r}, ${g}, ${b})`;

  // Set new background
  document.body.style.background = rgbColor;

  // Update heading text with the RGB value
  heading.textContent = rgbColor;
});
