/* JavaScript Date getHours()

Definition and Usage
getHours() returns the hour (0 to 23) of a date.

Syntax
Date.getHours()

Return Value
Type	    Description
A number	The local time hour (0 to 23).

Examples
Get the hours:*/

const d = new Date();
console.log(d.getHours());

//Get the hours from a specific date:

const d1 = new Date("July 21, 1983 01:15:00");
console.log(d1.getHours());

function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
  }
  
  const d2 = new Date();
  let h = addZero(d.getHours());
  let m = addZero(d2.getMinutes());
  let s = addZero(d.getSeconds());
  let time = h + ":" + m + ":" + s;

  console.log(time);