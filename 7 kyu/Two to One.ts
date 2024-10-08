/* Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz" */

export const longest = (s1:string, s2:string): string => {
    const result = (s1 + s2).split('').sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
    return result.filter((item, index) => result.indexOf(item) === index).join('');
  }
