let num1 = '';
let num2 = '';
let operation = '';

function appendNumber(number) {
  if (operation === '') {
    num1 += number;
    updateDisplay(num1);
  } else {
    num2 += number;
    updateDisplay(num2);
  }
}

function setOperation(op) {
  operation = op;
  updateDisplay(operation);
}

function calculate() {
  let result;
  const parsedNum1 = parseFloat(num1);
  const parsedNum2 = parseFloat(num2);

  switch (operation) {
    case '+':
      result = add(parsedNum1, parsedNum2);
      break;
    case '-':
      result = subtract(parsedNum1, parsedNum2);
      break;
    case '*':
      result = multiply(parsedNum1, parsedNum2);
      break;
    case '/':
      if (parsedNum2 === 0) {
        result = 'Cannot divide by zero';
      } else {
        result = divide(parsedNum1, parsedNum2);
      }
      break;
    default:
      result = '';
      break;
  }

  updateDisplay(result);
  resetCalculator();
}

function clearCalculator() {
  resetCalculator();
  updateDisplay('');
}

function resetCalculator() {
  num1 = '';
  num2 = '';
  operation = '';
}

function updateDisplay(value) {
  document.getElementById('screen').value = value;
}

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
