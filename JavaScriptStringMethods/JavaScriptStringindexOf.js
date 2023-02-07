/* JavaScript String indexOf()
Definition and Usage
The indexOf() method returns the position of the first occurrence of a value in a string.

The indexOf() method returns -1 if the value is not found.

The indexOf() method is case sensitive.
Syntax
string.indexOf(searchvalue, start)
Type	        Description
A number	    The first position where the search-value occurs.
                -1 if it never occurs.
Examples
Search a string for "welcome":*/

let text = "Hello world, welcome to the universe.";
console.log(text.indexOf("welcome"));

//Search a string for "Welcome":

let text1 = "Hello world, welcome to the universe.";
console.log(text1.indexOf("Welcome"));

//Find the first occurrence of "e":

let text2 = "Hello world, welcome to the universe.";
console.log(text2.indexOf("e"));

//Find the first occurrence of "e", starting at position 5:

let text3 = "Hello world, welcome to the universe.";
console.log(text3.indexOf("e", 5));

//Find the first occurrence of "a":

let text4 = "Hello world, welcome to the universe.";
console.log(text4.indexOf("a"));
