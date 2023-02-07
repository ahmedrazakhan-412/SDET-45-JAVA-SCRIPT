/* Extracting String Parts
There are 3 methods for extracting a part of a string:

slice(start, end)
substring(start, end)
substr(start, length)

JavaScript String slice()
slice() extracts a part of a string and returns the extracted part in a new string.

The method takes 2 parameters: start position, and end position (end not included).

Example
Slice out a portion of a string from position 7 to position 13:*/

let text = "Apple, Banana, Kiwi";
console.log(text.slice(7, 13));

/*Note
JavaScript counts positions from zero.

First position is 0.

Second position is 1.*/

/* Examples
If you omit the second parameter, the method will slice out the rest of the string:*/

let text1 = "Apple, Banana, Kiwi";
console.log(text1.slice(7));

//If a parameter is negative, the position is counted from the end of the string:

let text2 = "Apple, Banana, Kiwi";
console.log(text2.slice(-12));

//This example slices out a portion of a string from position -12 to position -6:

let text3 = "Apple, Banana, Kiwi";
console.log(text3.slice(-12, -6));