// TASK: 2)	Create a function that returns sum of first and last elements of given array.

let arr = [1,6,23,8,4,8,3,7];

const sumFunc = (yourArray) => {
    let sum = 0;
    sum = yourArray[0] + (yourArray[yourArray.length-1])
    return sum;
}

console.log(sumFunc(arr));