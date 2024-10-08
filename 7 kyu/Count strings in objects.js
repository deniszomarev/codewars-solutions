/* 
Create a function strCount (takes an object as argument) that will count all string values inside an object. For example:

strCount({
  first: "1",
  second: "2",
  third: false,
  fourth: ["anytime",2,3,4],
  fifth:  null
  })
  //returns 3
*/

function strCount(obj) {
  let count = 0;
  Object.values(obj)
    .flat()
    .forEach((element) => {
      if (typeof element == "string") count++;
      if (typeof element == "object" && element != null) {
        Object.values(element)
          .flat()
          .forEach((el) => {
            if (typeof el == "string") count++;
          });
      }
    });
  return count;
}
