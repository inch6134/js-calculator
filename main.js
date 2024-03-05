// global variables
let firstNumber = 0.00;
let secondNumber = 0.00;
let currentNumber = '';
let operator = "";
let result = 0.00;
let displayValue = '';
const numberRegex = new RegExp("[0-9]");
const operatorRegex = new RegExp("[+×÷-]");
let initialized = true;

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
  if (displayValue === Infinity) {
    displayDOM.innerHTML = 'OOPS!';
  } else {
    displayDOM.innerHTML =`${displayValue}`;  
  }
}

function clear() {
  firstNumber = 0.00;
  secondNumber = 0.00;
  currentNumber = '';
  displayValue = '0';
  operator = '';
  result = 0.00;
  initialized = true;
  showDisplay();
}

function setNumber() {
  if(initialized) {
    firstNumber = parseFloat(currentNumber);
    currentNumber = '';
    initialized = false;
  } else if(!initialized) {
    secondNumber = parseFloat(currentNumber);
    currentNumber = '';
  }
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
    if (numberRegex.test(button.textContent)) {
      currentNumber += button.textContent;
      displayValue = currentNumber;
      showDisplay();
    } else if (operatorRegex.test(button.textContent)) {
      operator = button.textContent;
      setNumber();
    } else if (button.textContent === '.') {
      currentNumber += button.textContent;
      displayValue = currentNumber;
      showDisplay();
    } else if (button.textContent === '%') {
      percent();
    } else if (button.textContent === 'C') {
      clear();
    } else if (button.textContent === '=') {
      setNumber();
      result = Math.round(operate(operator, firstNumber, secondNumber) * 100) / 100;
      displayValue = result;
      showDisplay();
      firstNumber = result;
    }
  });
});
