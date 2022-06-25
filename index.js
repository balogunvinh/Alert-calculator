const operator = prompt("Enter operator ( either +, -, * or /):");

const number1 = parseFloat(prompt("enter any number"));

const number2 = parseFloat(prompt("enter your second number"));

let result;

if (operator == "+") {
  result = number1 + number2;
} else if (operator == "-") {
  result = number1 - number2;
} else if (operator == "*") {
  result = number1 * number2;
} else if(operator == "/"){
  result = number1 / number2;
}

console.log (alert(`${number1} ${operator} ${number2} = ${result}`));



