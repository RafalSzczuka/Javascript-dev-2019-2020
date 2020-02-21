const onlyDigits = data => {
  // map of 0-9 numbers, to compare with data provided
  const numbersMap = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let listOfDigits = [];

  // conversion of provided data to array of string elements (with rest method)
  data = [...data.toString()];

  // for each element from data array - if numbersMap includes that element - parse to integer and push to a new array of digits
  data.forEach(element => {
    if (numbersMap.includes(element)) {
      element = parseInt(element);
      listOfDigits.push(element);
    }
  });

  return listOfDigits;
};

let someText = `45A67b88`;

console.log(onlyDigits(someText));
