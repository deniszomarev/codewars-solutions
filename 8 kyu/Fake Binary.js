/* 
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
*/

function fakeBin(x) {
  for (let i = 0; i < x.length; i++) {
    +x[i] >= 5
      ? (x = x.substr(0, i) + "1" + x.substr(i + 1))
      : (x = x.substr(0, i) + "0" + x.substr(i + 1));
  }
  return x;
}
