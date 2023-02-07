/* JavaScript String substr()
substr() is similar to slice().

The difference is that the second parameter specifies the length of the extracted part.

Example */

let str = "Apple, Banana, Kiwi";
console.log(str.substr(7, 6));

//If you omit the second parameter, substr() will slice out the rest of the string.

Example
let str1 = "Apple, Banana, Kiwi";
console.log(str.substr(7));

//If the first parameter is negative, the position counts from the end of the string.

Example
let str2 = "Apple, Banana, Kiwi";
console.log(str.substr(-4));