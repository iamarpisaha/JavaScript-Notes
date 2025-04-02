const temInput = document.getElementById("temperature-input");
const result = document.getElementById("result");
const converterForm = document.getElementById("converter-form");

converterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputVal = Number.parseInt(temInput.value);
  const convertedVal = (inputVal * 9) / 5 + 32;
  console.log(convertedVal);
  result.innerText = convertedVal;
});
