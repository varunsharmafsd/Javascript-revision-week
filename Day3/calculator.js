const prompt = require('prompt-sync')();

let a = prompt('enter the first number');
let b = prompt('enter the second number');
var operator = prompt('enter the operator');
var result;

switch(operator){
    case '+':
        result = a + b;
        break;
    case '-':
        result = a - b;
        break;
    case '*':
        result = a * b;
        break;
    case '/':
        if(b == 0){
            console.log("Error: Division by zero is not allowed.");
            break;
        }
        result = a / b;
        break;
    default:
        console.log("Error: Invalid operator. Please use +, -, *, or /.");
}

console.log(" the result is " , result);