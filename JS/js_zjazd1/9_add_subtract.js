// TASK: With a given start value of 0. Iterate the array and add even items and subtract odd ones. [1,6,23,8,4,98,3,7,3,98,4,98]

let numbers = [1,6,23,8,4,98,3,7,3,98,4,98];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        sum += numbers[i];
    } else {
        sum -= numbers[i];
    }
}

// print out value of calculation below
console.log(sum)