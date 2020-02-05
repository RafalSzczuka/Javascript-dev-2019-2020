/* TASK: Calculate average value of items at even indexes. Zero is not considered to be even number. 
[1,6,23,8,4,98,3,7,3,98,4,98]
*/

let numbers = [1,6,23,8,4,98,3,7,3,98,4,98];

let values = [];  // array for values at even indexes
let sum = 0; // variable for sum of values storage
let average = 0; // variable for sum/values.lenght calculation

// loop for finding values at even index (index 0 is skipped)
for (let i = 0; i < numbers.length; i++) {
    if (i == 0) {
        continue;
    }
    if (i % 2 == 0) {
        values.push(numbers[i])
    }
}

// print out array of values at even indexes
console.log(`Values at even index from original array: ${values}`)

// loop for sum up all values from an array
for (let i = 0; i < values.length; i++) {
    sum += values[i];
}

// average calculation
average = sum / values.length;

// print out average value
console.log(`Average value: ${average}`);
