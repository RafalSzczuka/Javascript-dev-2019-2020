// TASK: find leap years from given list of years

let years = [1974, 1900, 1985, 2000];

let leapYears = []; // empty list, to store leap years

// loop - iterate for every element of list, find values which modulo of 4 equals 0 (def of leap year)
for (let i = 0; i < years.length; i++) {
  if ((years[i] % 4 == 0 && years[i] % 100 !== 0) || years[i] % 400 == 0) {
    leapYears.push(years[i]);
  }
}

// print out list of years
console.log(`Leap years: ${leapYears}`);
