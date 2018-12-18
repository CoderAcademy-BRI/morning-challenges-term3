/*
Line 28 is calling 'sayGreetings' and handing it a callback 'sayNiceToMeetYou'
Line 29 is calling 'sayGreetings' and handing it a callback 'sayGoodbye'

Fix the 'sayGreetings' function so it runs the callback each time.

DESIRED OUTPUT:
Greetings!
Nice to meet you!
Greetings!
Goodbye!

Check your solution by running node 27_callbacksPartOne.js
*/

const sayGreetings = () => {
    console.log('Greetings!')
}

const sayNiceToMeetYou = () => {
    console.log('Nice to meet you!')
}

const sayGoodbye = () => {
    console.log('Goodbye!')
}
  
sayGreetings(sayNiceToMeetYou)
sayGreetings(sayGoodbye)
