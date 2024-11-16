const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const amount = document.querySelector('input[type="number"]');
const container = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

createButton.addEventListener("click", () => {
  if (amount.value >= 1 && amount.value <= 100) {
    createBoxes(amount.value);
    amount.value = "";
  } else {
    alert("Liczba musi mieścić się w przedziale od 1 do 100!");
    amount.value = "";
  }
});

function createBoxes(amount) {
  let boxSize = 30;
  for (let i = 0; i < amount; i++) {
    const newDiv = document.createElement("div");
    newDiv.style.width = `${boxSize}px`;
    newDiv.style.height = `${boxSize}px`;
    newDiv.style.backgroundColor = getRandomHexColor();
    newDiv.style.margin = "5px"; // Dla estetyki
    container.appendChild(newDiv);
    boxSize += 10;
  }
}

destroyButton.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  container.innerHTML = "";
}
