/* You get an array of arrays.
If you sort the arrays by their length, you will see, that their length-values are consecutive.
But one array is missing!


You have to write a method, that return the length of the missing array.

Example:
[[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

If the array of arrays is null/nil or empty, the method should return 0.

When an array in the array is null or empty, the method should return 0 too!
There will always be a missing element and its length will be always between the given arrays.

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have created other katas. Have a look if you like coding and challenges. */

function getLengthOfMissingArray(arrayOfArrays) {
  console.log(arrayOfArrays);
  if (!(arrayOfArrays && arrayOfArrays.length)) {
    return 0;
  } else {
    const arr = arrayOfArrays.sort((a, b) =>
      a && b ? a.length - b.length : 0
    );
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] && arr[i].length && arr[i + 1]) {
        if (arr[i].length != arr[i + 1].length - 1) {
          return arr[i].length + 1;
        }
      } else {
        return 0;
      }
    }
  }
}
