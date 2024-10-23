import image from "./images/club-sw.jpg";

const contentDiv = document.getElementById("content");


const img = document.createElement("img");
const h2 = document.createElement("h2");
const p = document.createElement("p");

img.src = image;
h2.textContent = "Loremstaurant";
p.textContent = "This restaurant is fantastic, and you will enjoy it greatly"

contentDiv.appendChild(img);
contentDiv.appendChild(h2);
contentDiv.appendChild(p);


console.log("Hello world!");