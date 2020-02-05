// TASK 1)	Create a function that returns the sum of all elements passed in array as parameter. Function (array)=>number

let arr = [1,6,23,8,4,8,3,7];

const sumFunc = (yourArray) => {
    let sum = 0;
    for (let i = 0; i < yourArray.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(sumFunc(arr));