// global variables
let firstNumber = 0;
let secondNumber = 0;
let operator = "";
let result = 0;
let displayValue = 0;

// DOM elements
const displayDOM = document.querySelector('#display');
const buttons = document.querySelectorAll('#button-container > button');

// utility functions

function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a,b);

        case '-':
            return subtract(a,b);

        case '*':
            return multiply(a,b);

        case '/':
            return divide(a,b);
    
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

// event listeners for buttons
buttons.forEach((button) => {
  
})