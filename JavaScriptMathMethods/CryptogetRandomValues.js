/* Crypto getRandomValues()

Definition and Usage
The crypto.getRandomValues() method returns an array of random numbes.

The crypto.getRandomValues() method returns cryptographically strong random values.

Note
crypto.getRandomValues() returns the same array that is passed, with the contents replaced with new random numbers. The contents of the original array is not saved.

The array must be a typedArray of integers:

Int8Array
Uint8Array
Uint8ClampedArray
Int16Array
Uint16Array
Int32Array
Uint32Array
BigInt64Array
BigUint64Array

Syntax
crypto.getRandomValues(array)
Return Value
Type	Description
typedArray	A typedArray of integers.

Example*/

const myArray = new Uint32Array(10);
var ran = crypto.getRandomValues(myArray);

console.log(ran);