const input = document.getElementById("validation-input");
const dataLength = input.getAttribute("data-length");

input.addEventListener("blur", changeBorderColor);
function changeBorderColor(event) {
  const valueLength = event.target.value.trim().length;
  if (valueLength === Number(dataLength)) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}
