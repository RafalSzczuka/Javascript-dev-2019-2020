// TASK: Calculate average value from the given array for even numbers [1,6,23,8,4,98,3,7,3,98,4,98]

// initialize variables to storage array of even numbers, sum of even numbers and finally - average value
let array = [1,6,23,8,4,98,3,7,3,98,4,98];
let evenNumbers = [];
let sum = 0;
let average = 0;

// loop for finding even numbers and push them to a new array
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
        evenNumbers.push(array[i])
    }
}

// loop for sum up all even numbers from an array
for (let i = 0; i < evenNumbers.length; i ++) {
    sum += evenNumbers[i]
}

// average calculation - sum divided by number of elements in an array (value rounded to 2 digits after decimal point)
average = (sum / evenNumbers.length).toFixed(2);

// print out values
console.log(`Array of even numbers: ${evenNumbers}`);
console.log(`Sum of all elements from even numbers array: ${sum}`);
console.log(`Average value: ${average}`);