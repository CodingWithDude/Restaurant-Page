import heroImage from "../asset/heroImage.png";

function generateHome() {
  // Content
  const content = document.createElement("div");
  const tagLine = document.createElement("p");
  const image = new Image();
  image.src = heroImage;
  const callToAction = document.createElement("p");

  // Creating Classes
  content.classList.add("homeContent");
  tagLine.classList.add("tagLine");
  image.classList.add("heroImage");
  callToAction.classList.add("callToAction");

  // Adding textContent
  tagLine.textContent = "Where every ingredient tells a story";
  callToAction.textContent = "Reserve a table";

  // Building HTML Structure
  content.appendChild(tagLine);
  content.appendChild(image);
  content.appendChild(callToAction);

  return content;
}

export default generateHome;
