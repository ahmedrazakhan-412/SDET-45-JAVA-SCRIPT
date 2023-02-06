/* JavaScript Array.isArray()
Definition and Usage
The isArray() method returns true if an object is an array, otherwise false.

Array.isArray()
Array.isArray() is a static property of the JavaScript Array object.

You can only use it as Array.isArray().

Using x.isArray(), where x is an array will return undefined.

Syntax
Array.isArray(obj)

Examples
Check if an object is an array:*/

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(Array.isArray(fruits));

//Check if another datatype is an array:

let text = "W3Schools";
console.log(Array.isArray(text));