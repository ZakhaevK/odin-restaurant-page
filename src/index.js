import { generateHome, generateMenu, generateAbout } from "./content";

const homeButt = document.getElementById("home");
const menuButt = document.getElementById("menu");
const aboutButt = document.getElementById("about");
const contentDiv = document.getElementById("content");

homeButt.addEventListener(click, () => {
  wipeContent()
  generateHome();
})

menuButt.addEventListener(click, () => {
  wipeContent()
  generateMenu();
})

aboutButt.addEventListener(click, () => {
  wipeContent()
  generateAbout();
})

function wipeContent() {
  contentDiv.replaceChildren();
}

generateHome();
console.log("Hello world!");