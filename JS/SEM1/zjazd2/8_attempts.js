//TASK: 8)	Create a function that takes two parameters: array and number off attempts. Based on number of attempts choose a random number from table that many times and return lowest one.

let arr = [1,6,23,8,4,8,3,7];

const randomLowest = (yourArray, attempts) => {
    let randomNumbers = [];
    for (let i = 0; i < attempts; i++) {
        let randomIndex = Math.floor(Math.random() * yourArray.length);
        randomNumbers.push(yourArray[randomIndex]);
        yourArray.splice(yourArray[randomIndex], 1);
    }
    return Math.min(...randomNumbers);

}

console.log(randomLowest(arr, 3));