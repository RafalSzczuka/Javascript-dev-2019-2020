// Write a program that prints all prime numbers in given range. Take sub from 1-100

// main func, with one argument - range number
const primes = range => {
  if (range < 2) return "please, give a number greater than 1";

  // set empty arrays, to store generated numbers from given range, and array to push primes
  let naturalNumbers = [];
  let primeNumbers = [];

  // for loop to generate natural numbers to the given range
  for (let i = 2; i <= range; i++) {
    naturalNumbers.push(i);
  }

  // function, checks if a number is a prime - it loops every time from the 2, and checks if that number have a more than 2 divisors
  const isPrime = number => {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  };

  // loop for every number in a array of natural numbers. Use isPrime function to push true prime number to a primeNumbers array
  naturalNumbers.forEach(number => {
    if (isPrime(number)) primeNumbers.push(number);
  });

  return "Prime numbers from given range:\n" + primeNumbers;
};

console.log(primes(100));
