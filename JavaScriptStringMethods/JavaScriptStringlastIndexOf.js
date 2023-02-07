/* JavaScript String lastIndexOf()
Definition and Usage
The lastIndexOf() method returns the index (position) of the last occurrence of a specified value in a string.

The lastIndexOf() method searches the string from the end to the beginning.

The lastIndexOf() method returns the index from the beginning (position 0).

The lastIndexOf() method returns -1 if the value is not found.

The lastIndexOf() method is case sensitive.
Syntax
string.lastIndexOf(searchvalue, start)
Return Value
Type	    Description
A number	The position where the search-value occurs.
            -1 if it never occurs.
Examples
Search for the last occurrence of "planet":*/

let text = "Hello planet earth, you are a great planet.";
console.log(text.lastIndexOf("planet"));

let text1 = "Hello planet earth, you are a great planet.";
console.log(text1.lastIndexOf("Planet"));

//Search for the last occurrence of "planet", starting at position 20:

let text2 = "Hello planet earth, you are a great planet.";
console.log(text2.lastIndexOf("planet", 20));