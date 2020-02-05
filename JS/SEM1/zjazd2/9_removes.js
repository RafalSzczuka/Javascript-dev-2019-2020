//TASK: 9)	Create a function that takes given array. Then takes a random element, removes it from the array and pushes it to result arrays. This takes place as long as there are elements in source array. 

let arr = [1,6,23,8,4,8,3,7];

// const randomNumber = (yourArr) => {
//     let randomIndex = Math.floor(Math.random() * yourArr.length);
//     return yourArr[randomIndex];
// }

const removes = (yourArray) => {
    let newArr = [];
    for (let i = 0; i <= yourArray.length; i++) {
        let randomIndex = Math.floor(Math.random() * yourArray.length);
        newArr.push(yourArray[randomIndex]);
        yourArray.splice(randomIndex, 1);
        i = 0;
    }
    return newArr;
}

console.log(removes(arr));