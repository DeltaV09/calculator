//calculator

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

function percent (firstNumber) {
    return firstNumber/100;
}

function plusMinus (firstNumber) {
    return firstNumber * -1;
}

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