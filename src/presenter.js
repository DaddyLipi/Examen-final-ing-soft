import NumeroLiteral from "./Numeros";

const first = document.querySelector("#numero-input");
const form = document.querySelector("#form");
const div = document.querySelector("#resultado-div");
const divNum = document.querySelector("#numero-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  divNum.innerHTML=Number.parseInt(first.value);
  //div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});
