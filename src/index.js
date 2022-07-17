import reset from "./styles/reset.css";
import css from "./styles/main.css";
import generateHome from "./pages/generateHome";
import generateMenu from "./pages/generateMenu";
import generateContact from "./pages/generateContact";
import backgroundImage from "./asset/background.jpg";

const body = document.body;
const mainContainer = document.createElement("div");

// Header
const header = document.createElement("header");
const title = document.createElement("h1");

// Nav
const nav = document.createElement("nav");
const homeBtn = document.createElement("button");
const menuBtn = document.createElement("button");
const contactBtn = document.createElement("button");

// Content
const contentContainer = document.createElement("div");
const background = new Image();
background.src = backgroundImage;

// Creating Classes
mainContainer.classList.add("mainContainer");
header.classList.add("header");
title.classList.add("title");
nav.classList.add("nav");
homeBtn.classList.add("homeBtn");
homeBtn.classList.add("btn");
menuBtn.classList.add("menuBtn");
menuBtn.classList.add("btn");
contactBtn.classList.add("contactBtn");
contactBtn.classList.add("btn");
contentContainer.classList.add("contentContainer");

// Adding textContent
title.textContent = "Culinary Compound";
homeBtn.textContent = "Home";
menuBtn.textContent = "Menu";
contactBtn.textContent = "Contact";

// Building HTML Structure
body.appendChild(mainContainer);
mainContainer.appendChild(header);
mainContainer.appendChild(nav);
mainContainer.appendChild(contentContainer);
header.appendChild(title);
header.appendChild(nav);
nav.appendChild(homeBtn);
nav.appendChild(menuBtn);
nav.appendChild(contactBtn);
contentContainer.appendChild(generateHome());

// Button On Click
homeBtn.onclick = () => {
  contentContainer.replaceChildren();
  contentContainer.appendChild(generateHome());
};
menuBtn.onclick = () => {
  contentContainer.replaceChildren();
  contentContainer.appendChild(generateMenu());
};
contactBtn.onclick = () => {
  contentContainer.replaceChildren();
  contentContainer.appendChild(generateContact());
};
