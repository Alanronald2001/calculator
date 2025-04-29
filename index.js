import { Calculator } from "./calculator.js";

const operandsContainer = document.getElementById("operands");
const operatorsContainer = document.getElementById("operators");
const display = document.getElementById("display");

const operands = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "(", ")"];
const operators = ["AC", "+", "-", "*", "/", "%", "="];

operands.forEach((n) => {
  const button = document.createElement("button");
  button.setAttribute("id", n);
  button.innerText = n;
  operandsContainer.appendChild(button);
});

operators.forEach((o) => {
  const button = document.createElement("button");
  button.setAttribute("id", o);
  button.innerText = o;
  operatorsContainer.appendChild(button);
});

const operate = (val1, val2, operator) => {
  const calc = new Calculator(val1, val2);
  console.log(operator);
  switch (operator) {
    case "+":
      return calc.add();
    case "-":
      return calc.substract();
    case "/":
      return calc.divide();
    case "%":
      return calc.modulo();
    default:
      break;
  }
};

let stack = [];
operandsContainer.addEventListener("click", (e) => {
  const target = e.target;
  const value = target.innerText;
  stack.push(value);
});

operatorsContainer.addEventListener("click", (e) => {
  const target = e.target;
  const value = target.innerText;
  let operator;
  if (value !== "=") operator = value;
  console.log(operator);
  if (value === "=") {
    display.innerText = operate(stack[0], stack[1], operator);
  }
  if (value === "AC") stack = [];
});
