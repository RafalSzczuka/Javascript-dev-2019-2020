//TASK: 13)	Create a function that take two numbers and return the object with 4 fields. Result on 4 basic arithmetic operations. 

const calc = (a, b) => {
    return {addition: a + b,
        subtraction: a - b,
        multiplication: a * b,
        division: a / b};
}

console.log(calc(2, 3));