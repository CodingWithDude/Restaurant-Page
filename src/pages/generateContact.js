import location from "../asset/restaurant-location.png";
function generateContact() {
  const content = document.createElement("div");
  content.classList.add("contactContent");

  const phone = document.createElement("p");
  phone.textContent = "Phone: 123-456-7890";

  const address = document.createElement("p");
  address.textContent = "Address: Hollywood Boulevard 42, Los Angeles";

  const map = new Image();
  map.src = location;
  map.classList.add("contactMap");

  content.appendChild(phone);
  content.appendChild(address);
  content.appendChild(map);

  return content;
}

export default generateContact;
