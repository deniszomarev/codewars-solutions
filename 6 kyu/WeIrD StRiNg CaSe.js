/* Write a function that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

Examples:
"String" => "StRiNg"
"Weird string case" => "WeIrD StRiNg CaSe" */

function toWeirdCase(string) {
  let flag = true;
  return Array.from(string)
    .map((el) => {
      if (el != " ") {
        if (flag == true) {
          flag = !flag;
          return el.toUpperCase();
        } else {
          flag = !flag;
        }
      } else {
        flag = true;
      }
      return el;
    })
    .join("");
}

function toWeirdCase(string) {
  return string
    .split(" ")
    .map((el) =>
      el
        .split("")
        .map((elem, index) => (index % 2 != 1 ? elem.toUpperCase() : elem))
        .join("")
    )
    .join(" ");
}
