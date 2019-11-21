// TASK: calculate total sum of odd numbers in a list below

let numbers = [1,6,23,8,4,98,3,7,3,98,4,98];

// initialize sum variable
let sum = 0;

// loop for finding odd numbers
for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 != 0) {
       sum += numbers[i] 
    }
}

//print out sum of odd numbers from given array
console.log(`Sum of odd numbers from your list: ${sum}`);