/* An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case) */

function isIsogram(st) {
  let str = st.toLowerCase();
  let temp = 0;
  console.log(str);
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (str[i] == str[j]) {
        if (i != j) {
          temp = temp + 1;
          console.log(temp);
        }
      }
    }
  }
  return temp == 0 ? true : false;
}
