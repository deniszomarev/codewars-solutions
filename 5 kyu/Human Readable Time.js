/* 
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/

function humanReadable(seconds) {
  for (var x = 0; x < 100; x++) {
    for (var y = 0; y < 60; y++) {
      for (var z = 0; z < 60; z++) {
        if (x * 3600 + y * 60 + z == seconds) {
          if (x < 10) x = "0" + x;
          if (y < 10) y = "0" + y;
          if (z < 10) z = "0" + z;
          return x + ":" + y + ":" + z;
        }
      }
    }
  }
}
