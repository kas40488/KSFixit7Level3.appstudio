/*
scenario:
form named ‘calc’
uses a function named ‘Calculate’ that takes 2 parameters named 'num1' and 'num2' and returns their sum to the main program
in the main program, gets 2 numbers from user and send them to the function
Note: remember to catch the answer that the function returns back to the main program
all output is in main program, not in the function
output to console in this format:
        The sum of X and Y is Z.
*/
       

function calculate(num1, num2) {
  let summedNumbers = (num1 + num2)
  return summedNumbers
}

let number1 = Number(prompt("Please enter a number"))
let number2 = Number(prompt("Please enter a second number"))

let myAnswer = calculate(number1, number2)
console.log(`The sum of ${number1} and ${number2} is ${myAnswer}.`)