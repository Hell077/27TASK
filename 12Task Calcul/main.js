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

    // Обработка оператора квадратного корня перед другими операциями
    currentString = currentString.replace(/√ (\d+(\.\d+)?)/g, (match, p1) => {
      return Math.sqrt(parseFloat(p1));
    });

    currentString = safeEval(currentString).toString();
  } catch (e) {
    currentString = 'Error: ' + e.message;
  }
  updateResult();
}

function safeEval(expression) {
  return new Function('return ' + expression)();
}

function Clear(){
  currentString = "";
  updateResult();
}


document.addEventListener('keydown', function(event) {
  const key = event.key;
  if (/\d/.test(key)) { 
    appendNumber(key);
  } else if (['+', '-', '*', '/'].includes(key)) { 
    appendOperator(key);
  } else if (key === 'Enter') { 
    calculateResult();
  } else if (key === 'Backspace') { 
    currentString = currentString.slice(0, -1);
    updateResult();
  } else if (key === 'Escape') { 
    clearString();
  } else if (key === 'r' || key === 'R') { 
    appendOperator('√');
  }
});

