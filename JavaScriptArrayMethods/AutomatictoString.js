/* Automatic toString()
JavaScript automatically converts an array to a comma separated string when a primitive value is expected.

This is always the case when you try to output an array.

These two examples will produce the same result:

Example */

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("Before : "+fruits);
console.log("Result : "+fruits);
console.log("After : "+fruits);

/* Note
All JavaScript objects have a toString() method.*/