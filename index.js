const operandsContainer = document.getElementById("operands");
const operatorsContainer = document.getElementById("operators");
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
