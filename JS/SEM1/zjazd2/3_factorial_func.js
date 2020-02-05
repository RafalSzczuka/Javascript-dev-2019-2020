// TASK: 3)	Create a function that takes a number and return factorial of that number.

const factorial = (number) => {
    for (let i = number - 1 ; i >= 1; i--) {
        number *= i
    }
    return number
}

console.log(factorial(7));