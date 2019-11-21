// TASK: Choose all the indexes on the highest value from the given array. [1,6,23,8,4,98,3,7,3,98,4,98]

let numbers = [1,6,23,8,4,98,3,7,3,98,4,98];

// empty array for index values
let indexValues = [0];

// starting assumption
let highest = numbers[0];

// loop for finding the highest value
for (let i = 1; i < numbers.length; i++) {

    if (numbers[i] > highest) {
        highest = numbers[i];
        indexValues = [];
        indexValues.push(i);
    } else if (numbers[i] == highest) {
        indexValues.push(i);
    }
}

// loop for finding indexes of highest values
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] == highest) {
//         indexValues.push(i)
//     }
// }

//print out array with index values
console.log(indexValues);