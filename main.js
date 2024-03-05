// global variables
let firstNumber = 0;
let secondNumber = 0;
let currentNumber = 0;
let operator = "";
let result = 0;
let displayValue = 0;
const numberRegex = new RegExp("[0-9]");
const operatorRegex = new RegExp("[+×÷-]");

// DOM elements
const displayDOM = document.querySelector("#display");
const buttons = document.querySelectorAll("#button-container > button");

// utility functions

function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return add(a, b);

    case "-":
      return subtract(a, b);

    case "×":
      return multiply(a, b);

    case "÷":
      return divide(a, b);

    default:
      break;
  }
}

function showDisplay() {
  displayDOM.innerHTML(displayValue);
}

// functions for operations

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function percent () {

}

// event listeners for buttons
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (numberRegex.test(button.value)) {
      currentNumber = parseInt(button.value);
    } else if (operatorRegex.test(button.value)) {
      operator = button.value;
    } else if (button.value === '%') {
      percent();
    } else if (button.value === 'C') {
      clear();
    } else if (button.value === '=') {
      operate(operator, firstNumber, secondNumber);
    }
  });
});
