/* JavaScript Math.random()
Definition and Usage
The Math.random() method returns a random number from 0 (inclusive) up to but not including 1 (exclusive).

Note
Math.random() does not return a cryptographically secure number.

If you need a cryptographically secure number, use this Crypto API method:
crypto.getRandomValues()

Syntax
Math.random()
Return Value
Type	Description
Number	A random number from 0 (inclusive) up to but not including 1 (exclusive).

Examples*/

console.log(Math.random());

//Return a random number between 0 and 10:
console.log(Math.random() * 10);

//Return a random number between 0 and 100:
console.log(Math.random() * 100);

//A random whole number between 1 and 10:
console.log(Math.floor((Math.random() * 10) + 1));

//A random whole number between 1 and 100:
console.log(Math.floor((Math.random() * 100) + 1));