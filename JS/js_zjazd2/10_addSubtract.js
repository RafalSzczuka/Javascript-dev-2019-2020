//TASK: 10)	Create a function that on given array will perform operation of adding or subtracting elements. Operation is to be chosen at random. And return a result.[a,b,c,d] =>(((a+-b)+-c)+-d)

let arr = [1,6,23,8,4,8,3,7];

const randomOperand = (yourArray) => {
    let number = yourArray[0];
    for (let i = 1; i < yourArray.length; i++) {
        let randomOperator = Math.random();
        if (randomOperator >= 0.5) {
            number += yourArray[i];
        } else {
            number -= yourArray[i];
        }
    }
    return number;
}

console.log(randomOperand(arr));