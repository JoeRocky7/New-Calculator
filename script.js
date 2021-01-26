window.onload = function () {
    input.value = 0;
}

let num1 = 0;
let num2 = 0;
let num3 = 0;
let operator = null;

numberButtons = document.querySelectorAll(".number-btn");

for (let index = 0; index < numberButtons.length; index++) {
    numberButtons[index].addEventListener("click", function (e) {
        if (operator === null) {
            setNumOne(e.target.innerText)
        } else {
            setNumTwo(e.target.innerText)
        }
    })
}

const operatorButtons = document.querySelectorAll(".operator-btn");
for (let index = 0; index < operatorButtons.length; index++) {
    operatorButtons[index].addEventListener("click", function (e) {
        executeOperation();
        
        operator = e.target.textContent;
    })
}

const equalsButton = document.querySelector("#equals");
equalsButton.addEventListener("click", function (e) {
    executeOperation();
    
    console.log("=");
})

const decimalButton = document.querySelector("#operator-decimal");
decimalButton.addEventListener("click", function (e) {
    input.value = document.querySelector("#operator-decimal").innerText;
    if (operator === null) {
        setNumOne(e.target.innerText)
    } else {
        setNumTwo(e.target.innerText)
    }
})

const clearButton = document.querySelector("#operator-cr");
clearButton.addEventListener("click", function (e) {
    input.value = 0;
    num1 = 0;
    num2 = 0;
    operator = null;
})

function setNumOne(number) {
    if (num1 === 0) {
        num1 = number;
    } else {
        num1 += number;
    }
    input.value = num1;
}

function setNumTwo(number) {
    if (num2 === 0) {
        num2 = number;
    } else {
        num2 += number;
    }
    input.value = num2;
}

function additionResult() {
    return parseFloat(num1) + parseFloat(num2);
}

function multiplicationResult() {
    return parseFloat(num1) * parseFloat(num2);
}

function divisionResult() {
    return parseFloat(num1) / parseFloat(num2);
}

function subtractionResult() {
    return parseFloat(num1) - parseFloat(num2);
}

function executeOperation() {
    if (operator === "-") {
        let result = subtractionResult();
        num1 = result;
        input.value = num1;
        num2 = 0;
        operator = null;
    }
    if (operator === "+") {
        let result = additionResult();
        num1 = result;
        input.value = num1;
        num2 = 0;
        operator = null;
    }
    if (operator === "*") {
        let result = multiplicationResult();
        num1 = result;
        input.value = num1;
        num2 = 0;
        operator = null;
    }
    if (operator === "/") {
        let result = divisionResult();
        num1 = result;
        input.value = num1;
        num2 = 0;
        operator = null;
    }
}

function clearInput() {
    input.value = "0";
}