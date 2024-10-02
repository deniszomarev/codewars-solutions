/* 
For this kata you will have to forget how to add two numbers.

It can be best explained using the following meme:

Dayane Rivas adding up a sum while competing in the Guatemalan television show "Combate" in May 2016

In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)

You may assume both integers are positive integers.
*/

function add(num1, num2) {
  const numArr1 = [...num1.toString()].reverse().map((str) => +str);
  const numArr2 = [...num2.toString()].reverse().map((str) => +str);
  const max = numArr1.length > numArr2.length ? numArr1.length : numArr2.length;
  const arr = [];
  for (let i = 0; i < max; i++) {
    arr[i] = (numArr1[i] || 0) + (numArr2[i] || 0);
  }
  return +arr.reverse().join("");
}
