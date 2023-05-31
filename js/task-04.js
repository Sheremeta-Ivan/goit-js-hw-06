let counterValue = 0;

const refs = {
  spanValue: document.querySelector("#value"),
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
};

refs.decrementBtn.addEventListener("click", decrement);
refs.incrementBtn.addEventListener('click', increment);

function decrement() {
  counterValue -= 1;
  refs.spanValue.textContent = counterValue;
}

function increment() {
  counterValue += 1;
  refs.spanValue.textContent = counterValue;
}
