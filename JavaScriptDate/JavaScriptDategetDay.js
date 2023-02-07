/* JavaScript Date getDay()

Definition and Usage
The getDay() method returns the day of the week (0 to 6) of a date.

Sunday = 0, Monday = 1, ... (See below):

Syntax
Date.getDay()

Return Value
Type	    Description
A number	The day of the week (0 to 6).

Examples
Get the day of the week:*/

const d = new Date();
console.log(d.getDay());

//Get the day of the week of a specific date:

const d1 = new Date("July 21, 1983 01:15:00");
console.log(d1.getDay());

//Get the name of the weekday (not just a number):

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d2 = new Date();
console.log(weekday[d2.getDay()]);