/* JavaScript String localeCompare()
efinition and Usage
The localeCompare() method compares two strings in the current locale.

The localeCompare() method returns sort order -1, 1, or 0 (for before, after, or equal).

The current locale is based on the language settings of the browser.

Syntax
string.localeCompare(compareString)
Return Value
Type	            Description
A number	        One of 3 values:
                   -1 if the string is sorted before the compareString
                    0 if the two strings are equal
                    1 if the string is sorted after the compareString

Examples
Compare "ab" with "cd":*/

let text1 = "ab";
let text2 = "cd";
console.log(text1.localeCompare(text2));

let text3 = "cd";
let text4 = "ab";
console.log(text3.localeCompare(text4));

let tex1 = "ab";
let tex2 = "ab";
console.log(tex1.localeCompare(tex2));

let tex3 = "A";
let tex4 = "a";
console.log(tex3.localeCompare(tex4));