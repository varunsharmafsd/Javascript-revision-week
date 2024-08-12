const prompt = require('prompt-sync')();
function calculator(num1, num2, operation) {
    let result;

    switch (operation) {
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            if (num2 === 0) {
                result = "Cannot divide by zero!";
            } else {
                result = num1 / num2;
            }
            break;
        default:
            result = "Invalid operation!";
    }

    console.log("Result: " + result);
}

// Example usage:
let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));
let operation = prompt("Enter the operation (add, subtract, multiply, divide):");

calculator(num1, num2, operation);
