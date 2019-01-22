/*
Create a version of the function that can only be called one time.

Repeated calls to the modified function will have no effect,
returning the value from the original call. Useful for initilization
functions, instead of having to set a boolean flage and then check
it later.

Example:
1.  let total=0
    const count = () => ++total;

    let countOnce = once(count);
    countOnce()
    => 1
    countOnce()
    => 1

Test your solution with mocha 37_once.js
*/


const once = () => {
    // Your code here
}


let assert = require('assert')

describe('Once', () => {
    it('returns a function', () => {
        const exampleOnce = once(() => {})
        assert.equal(typeof exampleOnce, 'function')
    })
    it('only runs once', () => {
        let total = 0
        const count = () => {
            return ++total;
        }

        const countOnce = once(count)
        assert.equal(countOnce(), 1)
        assert.equal(countOnce(), 1)
    })
})