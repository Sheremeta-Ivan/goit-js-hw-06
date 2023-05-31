const controlsDiv = document.querySelector("#controls");
const createBtn = controlsDiv.querySelector("[data-create]");
const destroyBtn = controlsDiv.querySelector("[data-destroy]");
const boxesDiv = document.querySelector("#boxes");

createBtn.addEventListener("click", () => {
  const amount = Number(document.querySelector("input").value);
  createBoxes(amount);
});

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    const size = 30 + i * 10;

    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxesDiv.appendChild(box);
  }
}

destroyBtn.addEventListener("click", destroyBoxes);
function destroyBoxes() {
  boxesDiv.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}
