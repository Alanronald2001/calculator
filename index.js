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

const operate = ({ val1, val2, operator }) => {
  const calc = new Calculator(Number(val1), Number(val2));
  switch (operator) {
    case "+":
      return calc.add();
    case "-":
      return calc.substract();
    case "*":
      return calc.multiply();
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
  if (!stack.length) {
    stack.unshift(value);
  } else {
    if (["+", "-", "*", "/", "%"].includes(stack[0])) {
      stack.unshift(value);
    } else {
      stack[0] += value;
    }
  }
  const span = document.createElement("span");
  span.innerText = value;
  display.appendChild(span);
});

operatorsContainer.addEventListener("click", (e) => {
  const target = e.target;
  const value = target.innerText;
  if (value === "AC") {
    clearDisplay();
    return;
  }
  if (value === "=") {
    const result = operate({
      val1: stack[2],
      val2: stack[0],
      operator: stack[1],
    });
    display.innerText = result;
    return;
  }
  stack.unshift(value);
  const span = document.createElement("span");
  span.innerText = value;
  display.appendChild(span);
});

const clearDisplay = () => {
  let node = display.lastElementChild;
  while (node) {
    display.removeChild(node);
    node = display.lastElementChild;
  }
  stack = [];
  display.innerText = "";
};
