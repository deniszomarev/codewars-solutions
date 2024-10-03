/* 
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

function pigIt(str) {
  arr = str.split(" ");
  for (var i in arr) {
    if (/^[a-zA-Z]+$/.test(arr[i])) {
      arr[i] = arr[i] + arr[i].charAt(0) + "ay";
      arr[i] = arr[i].slice(1);
    }
  }
  return arr.join(" ");
}
