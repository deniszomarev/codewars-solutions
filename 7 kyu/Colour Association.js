/* 
Colour plays an important role in our lifes. Most of us like this colour better then another. User experience specialists believe that certain colours have certain psychological meanings for us.

You are given a 2D array, composed of a colour and its 'common' association in each array element. The function you will write needs to return the colour as 'key' and association as its 'value'.

For example:

var array = [["white", "goodness"], ...] //returns [{white: 'goodness'}, ...]
*/

function colourAssociation(array) {
  const arrObj = [];
  for (let i of array) {
    let x = i[0];
    let objx = {};
    objx[x] = i[1];
    arrObj.push(objx);
  }
  return arrObj;
}

function colourAssociation(array) {
  let arrObj = [],
    objx = {};
  for (let i = 0; i < array.length; i++) {
    let x = array[i][0];
    objx = {};
    objx[x] = array[i][1];
    arrObj[i] = objx;
  }
  return arrObj;
}
