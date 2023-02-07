/* JavaScript String search()
Definition and Usage
The search() method matches a string against a regular expression **

The search() method returns the index (position) of the first match.

The search() method returns -1 if no match is found.

The search() method is case sensitive.

Note
** If the search value is a string, it is converted to a regular expression.

Syntax
string.search(searchValue)
Return Value
Type	    Description
A number	The position of the first match.
            -1 if no match.
Examples
Search for "Blue":*/

let text = "Mr. Blue has a blue house";
console.log(text.search("Blue"));

//Search for "blue":

let text1 = "Mr. Blue has a blue house";
console.log(text1.search("blue"));

//Search for /Blue/:

let text2 = "Mr. Blue has a blue house";
console.log(text2.search(/Blue/));

//Search for /blue/:

let text3 = "Mr. Blue has a blue house";
console.log(text3.search(/blue/));

//Search case insensitive:

let text4 = "Mr. Blue has a blue house";
console.log(text4.search(/blue/i));