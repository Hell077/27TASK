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
  if (currentString == null || currentString.trim() === '') {
    throw new Error('Поля не должны быть пустыми');
  }
  try {
    if (/\/ 0/.test(currentString)) {
      throw new Error('Ошибка при делении на 0');
    }

    // Обработка оператора квадратного корня перед другими операциями
    currentString = currentString.replace(/√\s*(\d+(\.\d+)?)/g, (match, p1) => {
      return Math.sqrt(parseFloat(p1));
    });

    // Обработка оператора возведения в степень
    currentString = currentString.replace(/(\d+(\.\d+)?)\s*\^\s*(\d+(\.\d+)?)/g, (match, p1, p2, p3) => {
      return Math.pow(parseFloat(p1), parseFloat(p3));
    });

    // Вычисление выражения
    currentString = safeEval(currentString).toString();
  } catch (e) {
    currentString = 'Error: ' + e.message;
  }
  updateResult();
}

function safeEval(expression) {
  return new Function('return ' + expression)();
}

function Clear() {
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
  } else if (key === 'Home') { 
    Clear();
  } else if (key === 'r' || key === 'R') { 
    appendOperator('√');
  } else if (key === '^') { 
    appendOperator('^');
  }
});