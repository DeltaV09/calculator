//calculator
const display = document.getElementById('display')
let displayValue = display.textContent;
let firstNumber = null;
let secondNumber = null;
let firstOperator = null;
let secondOperator = null;
let startedSecondNumber = false;

function add (firstNumber, secondNumber) {
    return parseFloat(firstNumber) + parseFloat(secondNumber);
}

function subtract (firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function multiply (firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function divide (firstNumber, secondNumber) {
    if (secondNumber === 0) {
        return "Nice try";
    }
    else {
        return firstNumber / secondNumber;
    }
}

function percent (displayValue) {
    let percentValue = displayValue/100;
    return percentValue.toString();
}

function plusMinus (displayValue) {
    let inverted = displayValue*-1;
    return inverted.toString();
}

//choose which operation to perform
function operate (firstNumber, secondNumber, operator) {
    let result;
    switch (operator) {
        case "\+":
            result = add(firstNumber,secondNumber);
            break;
        case "\-":
            result = subtract(firstNumber,secondNumber);
            break;
        case "\*":
            result = multiply(firstNumber,secondNumber);
            break;
        case "\/":
            result = divide(firstNumber,secondNumber);
            break;
    }
    displayValue = result;
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
    else if (target.classList.contains("equals")) {
        equals();
    }
    else if (target.classList.contains("decimal")) {
        addDecimal();
    }
    display.textContent = displayValue;
})

function updateDisplay(operand) {
    if (displayValue === "0" || displayValue === "Nice try") {
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
    if (!startedSecondNumber) {
        //set the first number and assign the operator to use
        //also updates operator if firstNumber set but second number not started
        firstNumber = displayValue;
        firstOperator = operator;
    }
    else if (startedSecondNumber){
        //if operator already set & second number entered,
        //perform previous operation and then set operator to new value
        secondNumber = displayValue;
        operate(firstNumber, secondNumber, firstOperator);
        firstOperator = operator;
        firstNumber = displayValue;
        startedSecondNumber = false;
    }
}

function clear() {
    displayValue = "0";
    firstNumber = null;
    secondNumber = null;
    firstOperator = null;
    startedSecondNumber = false;
}

function equals() {
    if(firstNumber && startedSecondNumber) {
        secondNumber = displayValue;
        operate(firstNumber, secondNumber, firstOperator)
        firstNumber = displayValue;
        firstOperator = null;
        secondNumber = null;
        startedSecondNumber = false;
    }
}

function addDecimal() {
    if(!displayValue.includes("\.")) {
        displayValue += "\.";
    }
}