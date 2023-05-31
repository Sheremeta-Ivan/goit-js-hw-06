const fontSizeControl = document.getElementById("font-size-control");
const textSpan = document.getElementById("text");

fontSizeControl.addEventListener("input", fontSizeChange);
function fontSizeChange() {
    textSpan.style.fontSize = `${fontSizeControl.value}px`;
}

