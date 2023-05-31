const refs = {
  nameInput: document.getElementById("name-input"),
  nameOutput: document.getElementById("name-output"),
};

refs.nameInput.addEventListener('input', getUserName);

function getUserName() {
  const name = refs.nameInput.value.trim();
  if (name === "") {
    refs.nameOutput.textContent = "Anonymous";
  } else {
    refs.nameOutput.textContent = name;
  }
  
}
