/*
Future updates:

1. Better UI
2. Keyboard support
3. % function
4. Unit conversion
5. Sqrt operation
6. +/- function
7. Refactor events into utility functions
8. Minimize global variables
 */


// global variables
let firstNumber = 0.0;
let secondNumber = 0.0;
let currentNumber = "";
let operator = "";
let result = 0.0;
let displayValue = "";
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
  if (displayValue === Infinity || displayValue === NaN) {
    displayDOM.innerHTML = "OOPS!";
  } else {
    displayDOM.innerHTML = `${displayValue}`;
  }
}

function clear() {
  firstNumber = 0.0;
  secondNumber = 0.0;
  currentNumber = "";
  displayValue = "0";
  operator = "";
  result = 0.0;
  initialized = true;
  showDisplay();
}

function setNumber() {
  if (initialized) {
    firstNumber = parseFloat(currentNumber);
    currentNumber = "";
    initialized = false;
  } else if (!initialized) {
    secondNumber = parseFloat(currentNumber);
    currentNumber = "";
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

// event listeners for buttons
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (numberRegex.test(button.textContent)) {
      if (currentNumber.length === 10) return;
      currentNumber += button.textContent;
      displayValue = currentNumber;
      showDisplay();
    } else if (operatorRegex.test(button.textContent)) {
      if (operator) {
        setNumber();
        result =
          Math.round(operate(operator, firstNumber, secondNumber) * 100) / 100;
        displayValue = result;
        showDisplay();
        firstNumber = result;
        operator = button.textContent;
      } else {
        operator = button.textContent;
        setNumber();
      }
    } else if (button.textContent === ".") {
      if (currentNumber.includes(".")) return;
      else {
        currentNumber += button.textContent;
        displayValue = currentNumber;
        showDisplay();
      }
    } else if (button.textContent === "<") {
      if(currentNumber.length === 1) {
        clear();
        return;
      };
      currentNumber = currentNumber.slice(0, currentNumber.length - 1);
      console.log(currentNumber);
      displayValue = currentNumber;
      console.log(displayValue);
      showDisplay();
    } else if (button.textContent === "C") {
      clear();
    } else if (button.textContent === "=") {
      setNumber();
      if (operator === "" && secondNumber === 0.0) {
        result = firstNumber;
        displayValue = result;
        showDisplay();
        return;
      } else if (operator != "") {
        currentNumber = firstNumber;
        setNumber();
        result =
          Math.round(operate(operator, firstNumber, secondNumber) * 100) / 100;
        displayValue = result;
        showDisplay();
        firstNumber = result;
        return;
      } else if (secondNumber === 0.0 && currentNumber) return;
      else if (!displayValue) {
        showDisplay();
      }
      else {
        result =
          Math.round(operate(operator, firstNumber, secondNumber) * 100) / 100;
        displayValue = result;
        showDisplay();
        firstNumber = result;
      }
    }
  });
});