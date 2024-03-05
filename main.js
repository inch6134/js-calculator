// global variables
let firstNumber = 0;
let secondNumber = 0;
let operator = "";
let displayValue = 0;

function operate(operator, a, b) {
    switch (operator) {
        case '+':
            add(a,b);
            break;

        case '-':
            subtract(a,b);
            break;

        case '*':
            multiply(a,b);
            break;

        case '/':
            divide(a,b);
            break;
    
        default:
            break;
    }
}

function showDisplay() {}

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
