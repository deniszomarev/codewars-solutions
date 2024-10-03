/* 
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
*/

function digital_root(n) {
  if (n == 0) {
    return 0;
  }
  const sum_result = (n % 10) + digital_root(parseInt(n / 10));
  if (sum_result < 10) {
    return sum_result;
  } else {
    return digital_root(
      (sum_result % 10) + digital_root(parseInt(sum_result / 10))
    );
  }
}

function digital_root(n) {
  while (n >= 10) {
    n = Array.from(String(n.toString()), Number).reduce(function (sum, elem) {
      return sum + elem;
    }, 0);
  }
  return n;
}
