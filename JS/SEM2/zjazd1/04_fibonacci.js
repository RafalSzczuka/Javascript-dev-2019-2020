class Fibonacci {
  constructor(n) {
    this.n = n;
    this.sequence = [1, 1];

    while (this.sequence.length < n) {
      let nextNumber =
        this.sequence[this.sequence.length - 2] +
        this.sequence[this.sequence.length - 1];

      this.sequence.push(nextNumber);
    }

    return this.sequence;
  }
}

let fib = new Fibonacci(20);

console.log(fib);
