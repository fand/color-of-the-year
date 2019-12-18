import { colors, yearOfTheColor } from "..";
// const { colors, yearOfTheColor } = require("..");

import Color from "color";

const body = document.querySelector("body");
const main = document.querySelector("main");
const header = document.querySelector("header");
const footer = document.querySelector("footer");
const icon = document.querySelector("#link > svg");

const white = Color("white");

const update = () => {
  const keys = Object.keys(colors);
  const key = keys[(Math.random() * keys.length) | 0];
  const color = colors[key];

  body.style.backgroundColor = color;
  main.style.color = color;

  const keyColor = Color(color).contrast(white) < 2 ? "#333333" : "white";
  main.style.background = keyColor;
  header.style.color = keyColor;
  footer.style.color = keyColor;

  const year = yearOfTheColor[key];
  header.innerText = year;

  const name = key
    .replace(/([A-Z])/g, x => ` ${x}`)
    .replace(/\b./g, x => x.toUpperCase());
  footer.innerText = name;

  icon.style.fill = color;
};

update();
setInterval(update, 5000);
