/*
Create a function which will take a value and multiply it a
specific number of times. 

valueAndTimes(value,times)

If the times parameter is not a valid
number the code should return null.

Examples:
valueAndTimes(9,2) == 9 * 2 == 18
valueAndTimes("[alright]",3) == "[alright]" + "[alright]" + "[alright]" == "[alright][alright][alright]"
valueAndTimes(5,"kanye west") == null

If your feeling confident uncomment the beast mode tests below.
*/

const valueAndTimes = (value, times) => {
    // Your code here
}

const assert = require('assert')

describe('Multiply tests', () => {
    it('Should multiply the values and times when both are numbers', () => {
        assert.equal(valueAndTimes(9,2), 18)
        assert.equal(valueAndTimes(9.5,2.1), 19.95)
    })
    it('Should multiply when the value is a string', () => {
        assert.equal(valueAndTimes("[alright]",3), "[alright][alright][alright]")
    })
    it('Should return null when the times is not a number', () => {
        assert.equal(valueAndTimes(4,"[kanye west]"), null)
        assert.equal(valueAndTimes(2,"taylor swift"), null)
    })
    // ------------------------------------------------------------------------
    //                           Beast Mode:
    // ------------------------------------------------------------------------
    // it('Beast mode: Should the times be in an array, multiply the array first then the value', () => {
    //     assert.equal(valueAndTimes(9,[2,2]), 36)
    //     assert.equal(valueAndTimes(4,[4,4]), 64)
    //     assert.equal(valueAndTimes(4,[4,"apples"]), null)
    // })
    // it('Beast mode: should take the value of an object/s and multiply them and then multiply the value', () => {
    //     assert.equal(valueAndTimes(2,{a: 3}), 6)
    //     assert.equal(valueAndTimes(3,{a: 3, b: 2}), 18)
    //     assert.equal(valueAndTimes(3,{a: 3, b: "matthew mcconaughey"}), null)
    // })
})


