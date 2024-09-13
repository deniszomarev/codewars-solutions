/* Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

What is considered Valid?
A string of braces is considered valid if all braces are matched with the correct brace.

Examples
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False */

export function validBraces(braces: string): boolean {
  const bracesObject: any = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const tempBraces: string[] = braces.split("");
  let flag: boolean = true;
  if (
    !(
      tempBraces.some((el: string) => el == ")" || el == "}" || el == "]") &&
      tempBraces.some((el: string) => el == "(" || el == "{" || el == "[")
    )
  ) {
    return false;
  }
  while (tempBraces.length > 1 && bracesObject[tempBraces[0]]) {
    tempBraces.some((el: string, index: number) => {
      if (
        bracesObject[el] &&
        (Object.values(bracesObject) as string[]).find(
          (x: string): boolean => x == tempBraces[index + 1]
        ) &&
        bracesObject[el] != tempBraces[index + 1]
      ) {
        flag = false;
        return true;
      }
      if (Object.keys(bracesObject) as string[])
        if (bracesObject[el] == tempBraces[index + 1]) {
          tempBraces.splice(index, 2);
          return true;
        }
    });
    if (!flag) {
      return false;
    }
  }
  return tempBraces.length == 0;
}
