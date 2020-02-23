/*
Write a class that prints the list of the first n Fibonacci numbers.
The first two Fibonacci numbers are 1 and 1.
The n+1-st Fibonacci number can be computed by adding the n-th and the n-1-th Fibonacci number.
The first few are therefore 1, 1, 1+1=2, 1+2=3, 2+3=5, 3+5=8.
*/

class Fibonacci {
  constructor(n) {
    this.n = n;
    this.sequence = [];

    if (n <= 0) {
      return (this.sequence = [0]);
    } else if (n === 1) {
      return (this.sequence = [1]);
    } else if (n === 2) {
      return (this.sequence = [1, 1]);
    } else {
      this.sequence = [1, 1];
      while (this.sequence.length < n) {
        let nextNumber =
          this.sequence[this.sequence.length - 2] +
          this.sequence[this.sequence.length - 1];

        this.sequence.push(nextNumber);
      }
    }

    return this.sequence;
  }
}

let fib = new Fibonacci(10);

fib.forEach(num => console.log(num));
