/*
Below is code which has been written in ES5, your task is to update
the code so that it uses ES6 code.

The code's purpose is to return a copy of the object, filtered to 
only have values for the whitelisted keys.

var filter = function filter(object) {
    for (var len = arguments.length, params = Array
        (len > 1 ? len - 1 : 0), key = 1; key < len; key++) {
      params[key - 1] = arguments[key];
    }
  
    var newObject = {};
    params.forEach(function (element) {
      return newObject[element] = object[element];
    });
    return newObject;
};

Tests: mocha 24_filter
*/

// Your code below
const filter = () => {

}

const assert = require('assert');

describe('Filter', () => {
 const list = {a: 1, b: 2, c: 3};

 it('can filter a single property', () => {
   const result = filter(list, 'a');
   const expected = {a: 1};
   assert.deepEqual(result, expected);
 })
 it('can filter multiple properties', () => {
     const result = filter(list, 'a', 'c');
     const expected = {a: 1, c: 3};
     assert.deepEqual(result, expected);
 })
});