
let currentString = '';

function appendNumber(number) {
  currentString += number;
  updateResult();
}

function appendOperator(operator) {
  currentString += ` ${operator} `;
  updateResult();
}

function updateResult() {
  document.getElementById('result').innerText = currentString;
}

function calculateResult() {
  try {
    currentString = eval(currentString).toString();
  } catch (e) {
    currentString = 'Error';
  }
  updateResult();
}
