/* avaScript String substring()
substring() is similar to slice().

The difference is that start and end values less than 0 are treated as 0 in substring().

Example*/

let str = "Apple, Banana, Kiwi";
console.log(str.substring(7, 13));

//If you omit the second parameter, substring() will slice out the rest of the string.