function operation() {
  let number1 = Number(document.querySelector('#num1').value);
  let number2 = Number(document.querySelector('#num2').value);
  let symbolOperator = document.querySelector('#operator').value;
  let output = document.querySelector('h1');
  let result;
  switch (symbolOperator) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    case '/':
      result = number1 / number2;
    default:
      result = 'Invalid operator';
      break;
  }
  return (output.textContent = result);
}
