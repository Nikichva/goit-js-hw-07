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
  "https://images.pexels.com/photos/3284996/pexels-photo-3284996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
image.alt = "Girl";
list.prepend(image);

const image2 = document.createElement("img");
image2.src =
  "https://images.pexels.com/photos/17367639/pexels-photo-17367639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
image2.alt = "Girl2";
list.append(image2);

const singleBtn = document.querySelector("#single");

const handleClick = () => {
  const image2 = document.createElement("img");
  image2.src =
    "https://images.pexels.com/photos/17367639/pexels-photo-17367639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  image2.alt = "Girl2";
  list.append(image2);
  console.log("click event listener callback");
};

singleBtn.addEventListener("click", handleClick);

// ===============================================
const multiBtn = document.querySelector("#multiple");

const firstCallback = () => {
  const element = document.querySelector(".blondegirl");
  element.classList.toggle("blondegirl-dark"); // добавляет "active", если его нет, или убирает, если он есть
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
multiBtn.addEventListener("click", firstCallback);
