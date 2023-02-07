/* Replacing String Content

The replace() method replaces a specified value with another value in a string:

Example */

let text = "Please visit Microsoft!";
console.log(text.replace("Microsoft", "W3Schools"));

/*Note
The replace() method does not change the string it is called on.

The replace() method returns a new string.

The replace() method replaces only the first match

If you want to replace all matches, use a regular expression with the /g flag set. See examples below.

By default, the replace() method replaces only the first match:

Example */

let text1 = "Please visit Microsoft and Microsoft!";
console.log(text1.replace("Microsoft", "W3Schools"));

/*By default, the replace() method is case sensitive. Writing MICROSOFT (with upper-case) will not work:

Example */

let text2 = "Please visit Microsoft!";
console.log(text2.replace("MICROSOFT", "W3Schools"));

//To replace case insensitive, use a regular expression with an /i flag (insensitive):

//Example

let text3 = "Please visit Microsoft!";
console.log(text3.replace(/MICROSOFT/i, "W3Schools"));

/*Note
Regular expressions are written without quotes.

To replace all matches, use a regular expression with a /g flag (global match):

Example */

let text4 = "Please visit Microsoft and Microsoft!";
console.log(text4.replace(/Microsoft/g, "W3Schools"));

/*Note
You will learn a lot more about regular expressions in the chapter JavaScript Regular Expressions.*/