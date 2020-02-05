// TASK: calculate factorial of a given number (for ex. 7)

let num = 7;

// def of a factorial: number! = number * (number-1) .... etc, until num == 1;

for (let i = num - 1 ; i >= 1; i--) {
    num *= i
}

//print out factorial of given number
console.log(`Factorial of your number is: ${num}`)