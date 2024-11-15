function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const toggleButton = document.querySelector(".change-color");
const span = document.querySelector(".color");

toggleButton.addEventListener("click", () => {
  const backgroundColor = getRandomHexColor();
  document.body.style.backgroundColor = backgroundColor;
  span.textContent = backgroundColor;
});
