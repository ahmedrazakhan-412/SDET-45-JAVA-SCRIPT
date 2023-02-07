/* Extracting String Characters

There are 3 methods for extracting string characters:

1) charAt(position)
2) charCodeAt(position)
3) Property access [ ]

JavaScript String charAt()

The charAt() method returns the character at a specified index (position) in a string:

Example */

let text = "HELLO WORLD";
console.log(text.charAt(0));

/*JavaScript String charCodeAt()

The charCodeAt() method returns the unicode of the character at a specified index in a string:

The method returns a UTF-16 code (an integer between 0 and 65535).

Example */

let text1 = "HELLO WORLD";
console.log(text1.charCodeAt(0));

/*Property Access
ECMAScript 5 (2009) allows property access [ ] on strings:

Example */

let text2 = "HELLO WORLD";
console.log(text2[0]);

/*Note
Property access might be a little unpredictable:

It makes strings look like arrays (but they are not)
If no character is found, [ ] returns undefined, while charAt() returns an empty string.
It is read only. str[0] = "A" gives no error (but does not work!)
Example */

let text3 = "HELLO WORLD";
console.log(text3[0] = "A");    // Gives no error, but does not work
