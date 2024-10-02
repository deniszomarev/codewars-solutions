/* 
vowelOne
Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

All non-vowels including non alpha characters (spaces,commas etc.) should be included.

Examples:

vowelOne( "abceios" ) // "1001110"

vowelOne( "aeiou, abc" ) // "1111100100"
*/

function vowelOne(s) {
  let vowels = "aeiouAEIOU";
  let temp = s.split("");
  for (let i = 0; i < temp.length; i++) {
    vowels.indexOf(temp[i]) > -1 ? (temp[i] = "1") : (temp[i] = "0");
  }
  return temp.join("");
}
