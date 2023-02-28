/* JavaScript Date getDate()

Definition and Usage
The getDate() method returns the day of the month (1 to 31) of a date.

Syntax
Date.getDate()

Return Value
Type	    Description
A number	The day of the month (1 to 31).

Examples
Get the day of the month:*/

const d = new Date();
console.log(d.getDate())

//Get the day of a specific date:

const d1 = new Date("July 21, 1983 01:15:00");
console.log(d1.getDate());