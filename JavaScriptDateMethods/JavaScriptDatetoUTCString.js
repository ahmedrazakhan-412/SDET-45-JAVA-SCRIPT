/* JavaScript Date toUTCString()

Definition and Usage
The toUTCString() method returns a date object as a string, according to UTC.

Tip: The Universal Coordinated Time (UTC) is the time set by the World Time Standard.

Note: UTC time is the same as GMT time.

Syntax
Date.toUTCString()

Return Value:	A String, representing the UTC date and time as a string
JavaScript Version:	ECMAScript 1

Example
Get a date object as a string, according to UTC:*/

const d = new Date();
console.log(d.toUTCString());