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

const singleBtn2 = document.querySelector("#butt");

singleBtn.addEventListener("click", handleClick);
const list2 = document.querySelector(".usernames2");

const handleClick2 = () => {
  const headerText = document.createElement("h2");
  list2.append(headerText);
  list2.innerHTML = "<h2>Подзаголовок</h2><p>Новый параграф</p>";
  list2.classList.toggle("usernames-hidden");
};
singleBtn2.addEventListener("click", handleClick2);
// ===============================================
const multiBtn = document.querySelector("#multiple");
const closeBtn = document.querySelector("#close");

const formOpener = (event) => {
  const element = document.querySelector(".form1");
  element.classList.toggle("form1-active"); // добавляет "active", если его нет, или убирает, если он есть
  console.log("First callback!");
  event.preventDefault();
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

const buttonClicker = () => {
  // Изменяем текст кнопки
  button.textContent = "Спасибо!";
  // Добавляем стиль
  button.style.fontWeight = "bold";
};
const button = document.querySelector("#myButton");
button.addEventListener("click", buttonClicker);

const inputField = document.querySelector("#lname");
const message = document.querySelector("#message");

const inputFieldFname = document.querySelector("#fname");
const nmessage = document.querySelector("#nmessage");

// Обработчик события focus
inputFieldFname.addEventListener("focus", () => {
  nmessage.textContent = "Начинайте вводить текст...";
});

// Обработчик события blur
inputFieldFname.addEventListener("blur", () => {
  nmessage.textContent = "Ввод завершён.";
});

// Обработчик события focus
inputField.addEventListener("focus", () => {
  message.textContent = "Начинайте вводить текст...";
});

// Обработчик события blur
inputField.addEventListener("blur", () => {
  message.textContent = "Ввод завершён.";
});

const toggleButton = document.querySelector("#toggleButton");
const removeHandlerButton = document.querySelector("#removeHandlerButton");

function changeBackgroundColor() {
  document.body.style.backgroundColor =
    document.body.style.backgroundColor === "lightblue" ? "white" : "lightblue";
}

// Добавляем обработчик события "click" для изменения цвета фона
toggleButton.addEventListener("click", changeBackgroundColor);

// Удаляем обработчик при клике на другую кнопку
removeHandlerButton.addEventListener("click", () => {
  toggleButton.removeEventListener("click", changeBackgroundColor);
  alert("Обработчик изменения цвета был отключён.");
});

const submitButton = document.querySelector("#submitButton");
submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  alert("Форма заполнена!");
  formOpener();
});
