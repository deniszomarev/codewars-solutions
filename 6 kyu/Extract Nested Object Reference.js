/* You are given a complex object that has many deeply nested variables. You don't want to go the usual if obj.property == null route. Create a prototype method that given a nested path, either return the value or undefined.

var obj = {
  person: {
    name: 'joe',
    history: {
      hometown: 'bratislava',
      bio: {
        funFact: 'I like fishing.'
      }
    }
  }
};

obj.hash('person.name'); // 'joe'
obj.hash('person.history.bio'); // { funFact: 'I like fishing.' }
obj.hash('person.history.homeStreet'); // undefined
obj.hash('person.animal.pet.needNoseAntEater'); // undefined */

Object.prototype.hash = function (path) {
  let pathArray = path.split(".");
  let tempObj = this;
  pathArray.forEach((el) => {
    if (tempObj !== undefined && typeof tempObj[el] !== "undefined") {
      tempObj = tempObj[el];
    } else {
      tempObj = undefined;
    }
  });
  return tempObj;
};
