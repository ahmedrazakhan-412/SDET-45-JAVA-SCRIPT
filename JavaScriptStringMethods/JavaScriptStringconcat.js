/* JavaScript String concat()

concat() joins two or more strings:

Example */

let text1 = "Hello";
let text2 = "World";
console.log(text1.concat(" ", text2));

/*The concat() method can be used instead of the plus operator. These two lines do the same:

Example*/

text = "Hello" + " " + "World!";
console.log("Hello".concat(" ", "World!"));

/*Note
All string methods return a new string. They don't modify the original string.

Formally said:

Strings are immutable: Strings cannot be changed, only replaced.*/