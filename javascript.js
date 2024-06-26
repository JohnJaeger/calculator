let body = document.querySelector("body");

let calculator = document.querySelector("#calculator");

let screen = document.querySelector("#screen");

let clearButton = document.querySelector("ce-button");
let equalsButton = document.querySelector("equals-button");
let backspaceButton = document.querySelector("backspace-button");

let sevenButton = document.querySelector("seven-button");
let eightButton = document.querySelector("eight-button");
let nineButton = document.querySelector("nine-button");
let divideButton = document.querySelector("divide-button");

let fourButton = document.querySelector("four-button");
let fiveButton = document.querySelector("five-button");
let sixButton = document.querySelector("six-button");
let multiplyButton = document.querySelector("multiply-button");

let oneButton = document.querySelector("one-button");
let twoButton = document.querySelector("two-button");
let threeButton = document.querySelector("three-button");
let subtractButton = document.querySelector("subtract-button");

let positiveNegativeButton = document.querySelector("positive-negative-button");
let zeroButton = document.querySelector("zero-button");
let periodButton = document.querySelector("period-button");
let addButton = document.querySelector("add-button");

let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = "";

function operate(){
    secondNumber = screen.textContent;
    if (firstNumber !== "" && secondNumber !== "" && operator !== ""){

        if (operator === "divide"){
            if (Number(secondNumber) !== 0){
                result = divide(firstNumber, secondNumber);
            } else {
                result = "ERROR";
            }
        }
        if (operator === "multiply"){
            result = multiply(firstNumber, secondNumber);
        }
        if (operator === "subtract"){
            result = subtract(firstNumber, secondNumber);
        }
        if (operator === "add"){
            result = add(firstNumber, secondNumber);
        }

        screen.textContent = result;
        firstNumber = result;
        secondNumber = "";
        operator = "";
    }
}

function numberPress(number){
    let array = screen.textContent.split("");
    if (array.length <= 15){
        array.push(number);
    }
    screen.textContent = array.join("");
}

function positiveNegative(){
    let array = screen.textContent.split("");
    if (array[0] === "-"){
        array.shift();
    } else {
        array.unshift("-");
    }
    screen.textContent = array.join("");
}

function checkIfPeriod(){
    let array = screen.textContent.split("");
    if (array.includes(".")){
        return true;
    } else {
        return false;
    }
}

function backspace(){
    let array = screen.textContent.split("");
    array.pop();
    screen.textContent = array.join("");
}

function clearScreen(){
    screen.textContent = "";
}

function clearAll(){
    firstNumber = "";
    secondNumber = "";
    operator = "";
    result = "";
    clearScreen();
}

function operatorPress(){
    firstNumber = screen.textContent;
    clearScreen();
}

function divide(firstNumber, secondNumber){
    return firstNumber / secondNumber;
}

function multiply(firstNumber, secondNumber){
    return firstNumber * secondNumber;
}

function subtract(firstNumber, secondNumber){
    return firstNumber - secondNumber;
}

function add(firstNumber, secondNumber){
    return Number(firstNumber) + Number(secondNumber);
}

calculator.addEventListener("click", function(event){
    switch (event.target.id){
        case "ce-button":
            clearAll();
            break;
        case "equals-button":
            operate();
            break;
        case "backspace-button":
            backspace();
            break;

        case "seven-button":
            numberPress(7);
            break;
        case "eight-button":
            numberPress(8);
            break;
        case "nine-button":
            numberPress(9);
            break;
        case "divide-button":
            operator = "divide";
            operatorPress();
            break;

        case "four-button":
            numberPress(4);
            break;
        case "five-button":
            numberPress(5);
            break;
        case "six-button":
            numberPress(6);
            break;
        case "multiply-button":
            operator = "multiply";
            operatorPress();
            break;

        case "one-button":
            numberPress(1);
            break;
        case "two-button":
            numberPress(2);
            break;
        case "three-button":
            numberPress(3);
            break;
        case "subtract-button":
            operator = "subtract";
            operatorPress();
            break;

        case "positive-negative-button":
            positiveNegative();
            break;
        case "zero-button":
            numberPress(0);
            break;
        case "period-button":
            if (checkIfPeriod() === false){
                numberPress(".");
            }
            break;
        case "add-button":
            operator = "add";
            operatorPress();
            break;
    }
});

body.addEventListener("keydown", function(event){
    switch (event.key){
        case "Enter":
            operate();
            break;
        case "Backspace":
            backspace();
            break;

        case "7":
            numberPress(7);
            break;
        case "8":
            numberPress(8);
            break;
        case "9":
            numberPress(9);
            break;
        case "/":
            operator = "divide";
            operatorPress();
            break;

        case "4":
            numberPress(4);
            break;
        case "5":
            numberPress(5);
            break;
        case "6":
            numberPress(6);
            break;
        case "*":
            operator = "multiply";
            operatorPress();
            break;

        case "1":
            numberPress(1);
            break;
        case "2":
            numberPress(2);
            break;
        case "3":
            numberPress(3);
            break;
        case "-":
            operator = "subtract";
            operatorPress();
            break;

        case "0":
            numberPress(0);
            break;
        case ".":
            if (checkIfPeriod() === false){
                numberPress(".");
            }
            break;
        case "+":
            operator = "add";
            operatorPress();
            break;
    }
});