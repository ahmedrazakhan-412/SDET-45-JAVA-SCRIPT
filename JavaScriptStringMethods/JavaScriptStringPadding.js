/* JavaScript String Padding

ECMAScript 2017 added two String methods: padStart() and padEnd() to support padding at the beginning and at the end of a string.

JavaScript String padStart()

The padStart() method pads a string with another string:

Example */

let text = "5";
console.log(text.padStart(4,"x"));

//Example
let text1 = "5";
console.log(text1.padStart(4,"0"));

/*Note
The padStart() method is a string method.

To pad a number, convert the number to a string first.

See the example below.

Example */

let numb = 5;
let text2 = numb.toString();
console.log(text2.padStart(4,"0"));

/*padStart() is an ECMAScript 2017 feature.

It is supported in all modern browsers:

padStart() is not supported in Internet Explorer.

JavaScript String padEnd()
The padEnd() method pads a string with another string:

Example*/

let text3 = "5";
console.log(text3.padEnd(4,"x"));

//Example

let text4 = "5";
console.log(text4.padEnd(4,"0"));

/*Note
The padEnd() method is a string method.

To pad a number, convert the number to a string first.

See the example below.

Example*/

let numb2 = 5;
let text5 = numb2.toString();
console.log(text5.padEnd(4,"0"));

/*Browser Support
padEnd() is an ECMAScript 2017 feature.

It is supported in all modern browsers:

padEnd() is not supported in Internet Explorer.*/

