let value = document.getElementById("value");

const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");

if (value.textContent === "0") {
  value.style.color = "black";
} else if (value.textContent < 0) {
  value.style.color = "red";
} else if (value.textContent > 0) {
  value.style.color = "green";
}

function increaseValue() {
  let currentValue = parseInt(value.textContent);
  currentValue++;
  value.textContent = currentValue;
  value.style.color = "green";
}

increase.addEventListener("click", increaseValue);

function decreaseValue() {
  let currentValue = parseInt(value.textContent);
  currentValue--;
  value.textContent = currentValue;
  value.style.color = "red";
}

decrease.addEventListener("click", decreaseValue);
