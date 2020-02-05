// TASK: Choose longest string from the array. [‘Karol’, ‘Adam’,’Rogowski’,’Politechnika’,’Super’,’Weekend’]. 

let words = ["Karol", "Adam","Rogowski","Politechnika","Super","Weekend"];

// temp variable with first string in array
let longestString = words[0];

for (let i = 1; i < words.length; i++) {
    if (words[i].length > longestString.length) {
        longestString = words[i];
    }
}
// print out longest string (with extra comments)
console.log(`Longest string from given array is: ${longestString.toUpperCase()}. It has ${longestString.length} characters.`);