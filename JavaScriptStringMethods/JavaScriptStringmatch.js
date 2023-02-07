/* JavaScript String match()
Definition and Usage
The match() method matches a string against a regular expression **

The match() method returns an array with the matches.

The match() method returns null if no match is found.

Syntax
string.match(match)

Return Values
Type	        Description
An array
or null	        An array containing the matches.
                null if no match is found.

Examples
A search for "ain" using a string:*/

let text = "The rain in SPAIN stays mainly in the plain";
console.log(text.match("ain"));

//A search for "ain" using a regular expression:

let text1 = "The rain in SPAIN stays mainly in the plain";
console.log(text1.match(/ain/));

//A global search for "ain":

let text2 = "The rain in SPAIN stays mainly in the plain";
console.log(text2.match(/ain/g));

//A global, case-insensitive search:

let text3 = "The rain in SPAIN stays mainly in the plain";
console.log(text3.match(/ain/gi));
