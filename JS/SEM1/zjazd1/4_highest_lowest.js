//TASK: Choose highest and lowest values from the given array (numbers).

let numbers = [1,6,23,8,4,98,3,7,3,98,4,98];

// initialize variable with starting value of index 0 in given array of numbers
let highest = numbers[0];
let lowest = numbers[0];

for (let i = 1; i < numbers.length; i++) {

    if (numbers[i] > highest) {
        highest = numbers[i];
    }
    else if(numbers[i] < lowest) {
        lowest = numbers[i];
    }

}

//print out lowest and highest
console.log(lowest);
console.log(highest);