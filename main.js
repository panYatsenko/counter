let value = document.getElementById("value");

const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");

function updateColor() {
  if (parseInt(value.textContent) === 0) {
    value.style.color = "black";
  } else if (parseInt(value.textContent) >= 1) {
    value.style.color = "green";
  } else {
    value.style.color = "red";
  }
}

decrease.addEventListener("click", function () {
  let currentValue = parseInt(value.textContent);
  currentValue--;
  value.textContent = currentValue;
  updateColor();
});

reset.addEventListener("click", function () {
  let currentVallue = 0;
  value.textContent = currentVallue;
  updateColor();
});

increase.addEventListener("click", function () {
  let currentValue = parseInt(value.textContent);
  currentValue++;
  value.textContent = currentValue;
  updateColor();
});