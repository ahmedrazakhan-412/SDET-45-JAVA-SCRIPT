/* JavaScript Date.now()

Definition and Usage
Date.now() returns the number of milliseconds since January 1, 1970.

Notes
Date.now() is a static method of the Date object.

You cannot use it on a date like myDate.now()

The syntax is always Date.now().

Syntax
Date.now()

Return Value
A number.

The number of milliseconds since midnight January 1, 1970 00:00:00 UTC.*/

console.log(Date.now());

//Calculate the number of years since 1970/01/01:

const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;

let years = Math.round(Date.now() / year);

console.log(years);
