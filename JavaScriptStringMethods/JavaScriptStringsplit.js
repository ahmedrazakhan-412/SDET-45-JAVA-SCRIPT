/* Converting a String to an Array

If you want to work with a string as an array, you can convert it to an array.

JavaScript String split()

A string can be converted to an array with the split() method:

Example */
let text = "H e l l o";
console.log(text.split(","));    // Split on commas
console.log(text.split(" "));    // Split on spaces
console.log(text.split("|"));    // Split on pipe

/* If the separator is omitted, the returned array will contain the whole string in index [0].

If the separator is "", the returned array will be an array of single characters:

Example */

console.log(text.split(""));