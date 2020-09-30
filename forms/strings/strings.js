
let quoteString = "Failure is simply the opportunity to begin again this time more intelligently."
let upperCaseString = quoteString.toUpperCase()
console.log(`Upper Case String is: ${upperCaseString}`)


let authorString =  "- Henry Ford"
let completeString = quoteString + authorString

let found = completeString.includes('Henry') 
if (found == true) { 
  alert('Henry was in the quote string')
}
else {
  alert('Henry was NOT in the quote string')
}

let secondQuote = "Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work. - Stephen King"
lowerCaseString = secondQuote.toLowerCase()
console.log(`Lower case string is ${lowerCaseString}`)
              
let userNumber = Number(prompt("Please enter a number:"))
updatedUserNumber = userNumber + 10
console.log(`The number ${userNumber} + 10 is ${updatedUserNumber}.`)

