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
    if (currentString.includes('/ 0')) {
      throw new Error('Ошибка при делении на 0');
    }

    currentString = safeEval(currentString).toString();
  } catch (e) {
    currentString = 'Error: ' + e.message;
  }
  updateResult();
}

function safeEval(expression) {
  return new Function('return ' + expression)();
}
