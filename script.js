const list = document.querySelector(".usernames");

// Adds an item to the end of the list
const lastItem = document.createElement("li");
lastItem.textContent = "Poly";
list.append(lastItem);

// Adds an item to the beginning of the list
const firstItem = document.createElement("li");
firstItem.textContent = "Ajax";
list.prepend(firstItem);

const images = document.querySelector(".blondegirl");
const image = document.createElement("img");
image.src =
  "https://images.pexels.com/photos/8911020/pexels-photo-8911020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
image.alt = "Girl";
list.prepend(image);

const image2 = document.createElement("img");
image2.src =
  "https://images.pexels.com/photos/20595067/pexels-photo-20595067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

image2.alt = "porsche";
list.append(image2);

const singleBtn = document.querySelector("#single");

const handleClick = () => {
  const image3 = document.createElement("img");
  image3.src =
    "https://images.pexels.com/photos/3284996/pexels-photo-3284996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  image3.alt = "Girl2";
  list.append(image3);
  console.log("click event listener callback");
};

singleBtn.addEventListener("click", handleClick);

// ===============================================
const multiBtn = document.querySelector("#multiple");
const closeBtn = document.querySelector("#close");

const formOpener = () => {
  const element = document.querySelector(".form1");
  element.classList.toggle("form1-active"); // добавляет "active", если его нет, или убирает, если он есть
  console.log("First callback!");
};
const secondCallback = () => {
  console.log("Second callback!");
};
const thirdCallback = () => {
  console.log("Third callback!");
};
multiBtn.addEventListener("click", thirdCallback);
multiBtn.addEventListener("click", secondCallback);
multiBtn.addEventListener("click", formOpener);
closeBtn.addEventListener("click", formOpener);
const chat = document.createElement("input");
chat.value = "ChatGpt";
chat.type = "text";
document.body.appendChild(chat);
