/* JavaScript String includes()
Definition and Usage
The includes() method returns true if a string contains a specified string.

Otherwise it returns false.

The includes() method is case sensitive.

Syntax
string.includes(searchvalue, start)

Return Value
Type	    Description
A boolean.	true if the string contains the value, otherwise false.

Examples
Check if a string includes "world":*/

let text = "Hello world, welcome to the universe.";
console.log(text.includes("world"));

//Start at position 12:

let text1 = "Hello world, welcome to the universe.";
console.log(text1.includes("world", 12));