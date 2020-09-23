/*> scenario:
form named 'while'
uses a while loop
each iteration, output sto console:
This is loop iteration 1.
This is loop iteration 2.
etc....
The loop is now done.
*/


let userChoice = confirm("Would you like to run the loop?")
let i = 1

while (userChoice == true) {
  alert("This is loop iteration" + i)
    i++
    userChoice = confirm("Would you like to run the loop?")
    if (userChoice == false) {
    alert("The loop is now done.")
  }
}

