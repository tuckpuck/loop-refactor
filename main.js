'use strict';
module.exports = {

  // REDUCE
  sum: (arr, base) => {
    var sum = arr.reduce((x, y) => (x + y));
    return sum + base;
  },
  //Done

  // SOME
  someObjsContainProp: (arr, prop) => {
    return arr.some(function(person){
   var hasProp = person.hasOwnProperty(prop);
   if(hasProp === true) {
       return true;
     } else {
       return false;
     }
   });
  },
  // Done

  // MAP
  convertNameArrayToObject: (arr) => {
    return arr.map(function(x) {
      var first = x[0];
      var last = x[1];
      var nameObject = {};
      nameObject.first = first;
      nameObject.last = last;
      return nameObject;
    });
  },
  // Done

  // EVERY
  objContainsProp: (arr, prop) => {
    return arr.every(function(person){
      var hasProp = person.hasOwnProperty(prop);
      if(hasProp === true) {
          return true;
        } else {
          return false;
        }
      });
  },
  // Done

  // FILTER
  stringMatch: (arr, str) => {
    return arr.filter(function(word) {
      if (word.includes(str)) {
        return word;
      }
    });
  }
  // Done
};
