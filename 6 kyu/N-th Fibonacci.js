/* I love Fibonacci numbers in general, but I must admit I love some more than others.

I would like for you to write me a function that, when given a number n (n >= 1 ), returns the nth number in the Fibonacci Sequence.

For example:

   nthFibo(4) == 2
Because 2 is the 4th number in the Fibonacci Sequence.

For reference, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two. */

function nthFibo(n) {
  var fib = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
  }
  return fib[n - 1];
}
