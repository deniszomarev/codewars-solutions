/* 
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.
*/

export function findUniq(arr: number[]): number {
  let except = arr.filter((el) => el != arr[0]);
  return except.length == 0 || except.length > 1 ? arr[0] : except[0];
}
