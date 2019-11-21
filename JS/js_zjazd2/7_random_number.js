//TASK: 7)	Create a function the return one random element from given array. // use random function 

let arr = [1,6,23,8,4,8,3,7];

const randomNumber = (yourArray) => {
    let randomIndex = Math.floor(Math.random() * yourArray.length);
    return yourArray[randomIndex];
}

console.log(randomNumber(arr));