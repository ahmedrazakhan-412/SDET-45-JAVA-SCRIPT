/* JavaScript Array entries()

Definition and Usage
The entries() method returns an Array Iterator object with key/value pairs:

[0, "Banana"]
[1, "Orange"]
[2, "Apple"]
[3, "Mango"]

The entries() method does not change the original array.

Syntax
array.entries()

Parameters
NONE
Return Value
Type	        Description
An iterable	    An array with key/value pairs.

Example
Create an Array Iterator, and then iterate over the key/value pairs: */

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits.entries();

for (let x of f) {
  console.log(x);
}

const myObj = { a: 1, b: 2, c: 3 };

for (const [key, value] of Object.entries(myObj)) {
  console.log(`${key}: ${value}`);
}

