// script.js
let display = document.getElementById('display');
let displayValue = '';

function appendNumber(number) {
    displayValue += number;
    display.value = displayValue;
}

function appendOperator(operator) {
    displayValue += ' ' + operator + ' ';
    display.value = displayValue;
}

function calculate() {
    try {
        display.value = eval(displayValue);
        displayValue = display.value;
    } catch (error) {
        display.value = 'Error';
        displayValue = '';
    }
}

function clearDisplay() {
    displayValue = '';
    display.value = displayValue;
}
