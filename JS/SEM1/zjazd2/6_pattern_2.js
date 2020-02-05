//TASK: 6)	For time of this example remove last element from the given array. Create a function that based on given array return new array in pattern [a,b,c,d,e] -> [a+b, c+d, e+e]

let arr = [1,6,23,8,4,8,3];

const pattern = (yourArray) => {
    let newArray = [];
    let sum = 0;
    for (let i = 0; i < yourArray.length; i += 2) {
        if (i === length-1) {  // or if last element index is odd - push that element to the list (more universal)
            yourArray.push(0);  // zmodyfikuj !
        }
        sum = yourArray[i] + yourArray[i+1];
        newArray.push(sum);
    }
    return newArray;
}

console.log(pattern(arr));