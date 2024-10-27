import { generateHome, generateMenu, generateAbout } from "./content";
import "./style.css"

const homeButt = document.getElementById("home");
const menuButt = document.getElementById("menu");
const aboutButt = document.getElementById("about");
const headButts = [homeButt, menuButt, aboutButt];
const contentDiv = document.getElementById("content");

homeButt.addEventListener("click", () => {
  wipeContent()
  disableButt(homeButt);
  generateHome();
})

menuButt.addEventListener("click", () => {
  wipeContent();
  disableButt(menuButt);
  generateMenu();
})

aboutButt.addEventListener("click", () => {
  wipeContent();
  disableButt(aboutButt);
  generateAbout();
})

function wipeContent() {
  contentDiv.replaceChildren("");
}

let prevButt = homeButt;
function disableButt(butt) {
  if (prevButt) {
    prevButt.removeAttribute("disabled");
  }
  butt.setAttribute("disabled", true);
  prevButt = butt;
}

generateHome();
disableButt(homeButt);
console.log("Hello world!");