import image from "./images/club-sw.jpg";

const contentDiv = document.getElementById("content");

const generateHome = function() {
  const img = document.createElement("img");
  const h2 = document.createElement("h2");
  const p = document.createElement("p");

  img.src = image;
  h2.textContent = "Loremstaurant";
  p.textContent = "This restaurant is fantastic, and you will enjoy it greatly";

  contentDiv.appendChild(img);
  contentDiv.appendChild(h2);
  contentDiv.appendChild(p);
}

const generateMenu = function() {
  const h2 = document.createElement("h2");
  const ul = document.createElement("ul");

  const li = document.createElement("li");
  const li2 = document.createElement("li");
  const li3 = document.createElement("li");
  const liItems = [li, li2, li3];

  h2.textContent = "Menu";
  li.textContent = "Chicken Noodles";
  li2.textContent = "Beef Noodles";
  li3.textContent = "Skittle Noodles";

  contentDiv.appendChild(h2);

  for (const element of liItems) {
    ul.appendChild(element)
  }
  contentDiv.appendChild(ul);
}

const generateAbout = function() {
  const h2 = document.createElement("h2");
  const p = document.createElement("p");

  h2.textContent = "About Loremstaurant";
  p.textContent = "We have over one restaurants scattered across the Earth. Please come find us at 21 Loremstrum St, New Ipsum, Loripsumia";

  contentDiv.appendChild(h2);
  contentDiv.appendChild(p);
}

export {generateHome, generateMenu, generateAbout};

