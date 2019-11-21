//TASK: 4)	Create a function that returns given array in reverse order. // no build in functions :)

let arr = [1,6,23,8,4,8,3,7];

const reversed = (yourArray) => {
    let newArr = [];
    for (let i = yourArray.length-1; i !== -1; i--) {
        newArr.push(yourArray[i]);
    }
    return newArr;
}

console.log(reversed(arr));