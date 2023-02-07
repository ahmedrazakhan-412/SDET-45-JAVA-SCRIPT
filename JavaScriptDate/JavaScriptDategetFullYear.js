/* JavaScript Date getFullYear()

Definition and Usage
getFullYear() returns the full year (4 digits) of a date.

Syntax
Date.getFullYear()

Return Value
Type	    Description
A number	The year of the date.
            (4 digits for dates between year 1000 and 9999).

Examples
Get the year:*/

const d = new Date();
console.log(d.getFullYear());

//Get the year of a specific date:

const d1 = new Date("July 21, 1983 01:15:00");
console.log(d1.getFullYear());