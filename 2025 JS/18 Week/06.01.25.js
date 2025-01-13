const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const display = document.querySelector('.screen');
let currentInput = '';
let previousInput = '';
let operator = '';

numberButtons.forEach(button => {
button.addEventListener('click', () => {
    currentInput += button.textContent;
    display.value = currentInput;
});
});


operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (previousInput && operator) {
        currentInput = calculate (previousInput, currentInput, operator);
    display.value = currentInput;
       
    }
   operator = button.textContent;
   previousInput= currentInput;
   currentInput = '';
   
  });

})

const equalsButton = document.querySelector('.equals');
equalsButton.addEventListener('click', () => {
    currentInput = calculate (previousInput, currentInput, operator);
    display.value = currentInput;
    operator = '';
    previousInput = '';
});

function calculate( num1, num2, operator) {
    const a = +num1;
    const b = +num2;
    switch(operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case 'x':
            return a * b;
        case '/':
            if (b === 0) {
                return 'Cannot divide by zero';
            }
            return a / b;
        default:
            return 'Error:Invalid operator';
        }
    }
const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
    
    display.value = "";
    operator = '';
    previousInput = '';
    currentInput = '';


});
const znakButton = document.querySelector('.switch');
znakButton.addEventListener('click', () => {
   
    currentInput = currentInput * -1;
    display.value = currentInput;
    currentInput = '';
});
const pointbutton = document.querySelector('.point');
pointbutton.addEventListener('click', () => {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        display.value = currentInput;
    }
});
const percentButton = document.querySelector('.percent');
percentButton.addEventListener('click', () => {
    currentInput = currentInput / 100;
    display.value = currentInput;
    currentInput = '';
});
