import css from "./styles/main.css";
import generateHome from "./pages/generateHome";
import generateMenu from "./pages/generateMenu";
import generateContact from "./pages/generateContact";

const body = document.body;
const mainContainer = document.createElement("div");

// Header
const header = document.createElement("div");
const title = document.createElement("div");

// Nav
const nav = document.createElement("div");
const homeBtn = document.createElement("button");
const menuBtn = document.createElement("button");
const contactBtn = document.createElement("button");

// Content
const content = document.createElement("div");

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
content.classList.add("content");

// Adding textContent
title.textContent = "Culinary Compound";
homeBtn.textContent = "Home";
menuBtn.textContent = "Menu";
contactBtn.textContent = "Contact";

// Building HTML Structure
body.appendChild(mainContainer);
mainContainer.appendChild(header);
mainContainer.appendChild(nav);
mainContainer.appendChild(content);
header.appendChild(title);
header.appendChild(nav);
nav.appendChild(homeBtn);
nav.appendChild(menuBtn);
nav.appendChild(contactBtn);

// Button On Click
homeBtn.onclick = () => {
  content.appendChild(generateHome());
};
menuBtn.onclick = () => {
  content.appendChild(generateMenu());
};
contactBtn.onclick = () => {
  content.appendChild(generateContact());
};
