//calculator
const display = document.getElementById('display')
let displayValue = display.textContent;
let firstNumber = null;
let secondNumber = null;
let firstOperator = null;
let secondOperator = null;
let startedSecondNumber = false;

function add (firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function subtract (firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function multiply (firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function divide (firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}

function percent (displayValue) {
    firstNumber = parseInt(displayValue);
    firstNumber /= 100;
    return firstNumber.toString();
}

function plusMinus (displayValue) {
    firstNumber = parseInt(displayValue);
    firstNumber = 0 - firstNumber;
    return firstNumber.toString();
}

//choose which operation to perform
function operate (firstNumber, secondNumber, operator) {
    let result;
    switch (operator) {
        case "\+":
            result = add(firstNumber,secondNumber);
        case "\-":
            result = subtract(firstNumber,secondNumber);
        case "\*":
            result = multiply(firstNumber,secondNumber);
        case "\\":
            result = divide(firstNumber,secondNumber);
    }
}

calculator.addEventListener("click",(event) => {
    let target = event.target;
    if (target.classList.contains("clear")) {   //wipe all data
        clear();
    }
    else if (target.classList.contains("operand")) {
        updateDisplay(target.value);
    }
    else if (target.classList.contains("plusMinus")) {  //invert the sign of current display value
        displayValue = plusMinus(displayValue);
    }
    else if (target.classList.contains("percent")) {    //convert current value into a percent
        displayValue = percent(displayValue);
    }
    else if (target.classList.contains("operator")) {
        updateOperator(target.value);
    }
    display.textContent = displayValue;
})

function updateDisplay (operand) {
    if (displayValue === "0") {
        displayValue = operand;
    }
    else if (firstNumber == displayValue && !startedSecondNumber) {
        displayValue = operand;
        startedSecondNumber = true;
    }
    else {
        displayValue += operand;
    }
}

function updateOperator(operator) {
    if (!firstOperator) {
        firstNumber = parseInt(displayValue);
        firstOperator = operator;
    }
    else {
        operate(firstNumber, secondNumber, firstOperator);
    }
}

function clear() {
    displayValue = "0";
    firstNumber = null;
    secondNumber = null;
    startedSecondNumber = false;
}
