const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const value = document.querySelector("#value");

let counterValue = 0;

const handleClickDecrement = () => {
 counterValue -= 1;
 value.textContent = counterValue;
};

const handleClickIncrement = () => {
 counterValue += 1;
 value.textContent = counterValue;
};

decrementBtn.addEventListener("click", handleClickDecrement);
incrementBtn.addEventListener("click", handleClickIncrement);


