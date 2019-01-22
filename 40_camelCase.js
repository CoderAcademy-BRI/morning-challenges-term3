/*
Write a function which will turn a string of words to
being camel cased.

Example:
    1. camelCase("alright alright alright") => "alrightAlrightAlright"

Test your solution with mocha 40_camelCase.js
*/


const camelCase = (string) => {
    // Your code here
}


let assert = require('assert')

describe('Camel Case Tests', () => {
    it('Should make strings camelCase', () => {
        assert.equal(camelCase("test case"), "testCase")
        assert.equal(camelCase("camel case method"), "camelCaseMethod")
    })
    it("Should allow the first letter to be camel cased", () => {
        assert.equal(camelCase("say hello"), "SayHello")
        assert.equal(camelCase("test case"), "TestCase")
    })
    it("Should return an empty string if the string is empty", () => {
        assert.equal(camelCase(""), "")
    })
    it("Should not affect single worded strings", () => {
        assert.equal(camelCase("react"), "react")
    })
    it("Should not affect camelCasedWords", () => {
        assert.equal(camelCase("JavaScript"), "JavaScript")
    })
})