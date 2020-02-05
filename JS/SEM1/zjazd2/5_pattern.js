//TASK: 5)	Create a function that based on given array returns new array in pattern [a,b,c,d,e,f] -> [a+b, c+d, e+f]    [1,3,4,1,0,3] => [4,5,3] function(array)=>array

let arr = [1,6,23,8,4,8,3,7];

const pattern = (yourArray) => {
    let newArray = [];
    let sum = 0;
    for (let i = 0; i < yourArray.length; i += 2) {
        sum = yourArray[i] + yourArray[i+1];
        newArray.push(sum);
    }
    return newArray;
}

console.log(pattern(arr));