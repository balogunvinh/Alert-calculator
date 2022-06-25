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

// to show the result as an alert  instead of viewing when page is inspect
console.log (alert(`${number1} ${operator} ${number2} = ${result}`));



