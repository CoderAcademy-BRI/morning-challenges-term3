/*
Remind yourself how .filter works. Build it yourself 
using only .forEach. We've started you off.

Check your solution by running node 27_callbacksPartTwo.js

*/

const filter = (items, callback) => {
    const results = []
    // Your code here
}

// I'm using your Filter method to return even numbers.
// If your filter method is correct, this code should return: [2, 4]

filter([1,2,3,4], (item) => {
    return item % 2 === 0
})