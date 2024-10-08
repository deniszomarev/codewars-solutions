/* 
After yet another dispute on their game the Bingo Association decides to change course and automate the game.

Can you help the association by writing a method to create a random Bingo card?

Bingo Cards
A Bingo card contains 24 unique and random numbers according to this scheme:

5 numbers from the B column in the range 1 to 15
5 numbers from the I column in the range 16 to 30
4 numbers from the N column in the range 31 to 45
5 numbers from the G column in the range 46 to 60
5 numbers from the O column in the range 61 to 75
Task
Write the function get_card()/getCard(). The card must be returned as an array of Bingo style numbers:

[ 'B14', 'B12', 'B5', 'B6', 'B3', 'I28', 'I27', ... ]
The numbers must be in the order of their column: B, I, N, G, O. Within the columns the order of the numbers is random.
*/

function getCard() {
  let arr = new Array();
  for (let i = 0; i < 24; i++) {
    if (i < 5) {
      arr[i] = "B" + Math.floor(Math.random() * (15 - 1) + 1);
    } else if (i < 10) {
      arr[i] = "I" + Math.floor(Math.random() * (30 - 16) + 16);
    } else if (i < 14) {
      arr[i] = "N" + Math.floor(Math.random() * (45 - 31) + 31);
    } else if (i < 19) {
      arr[i] = "G" + Math.floor(Math.random() * (60 - 46) + 46);
    } else if (i < 24) {
      arr[i] = "O" + Math.floor(Math.random() * (75 - 61) + 61);
    }
  }
  console.log(arr);
  return arr;
}
