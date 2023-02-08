/* JavaScript Math.sin()

Definition and Usage
The Math.sin() method returns the sine of a number.

The Math.sin() method returns a number between -1 and 1.

The Math.sin() method expects the number in radians.

Syntax
Math.sin(x)

Return Value
Type	        Description
Number	        -1 to 1. The sine of the number.
                NaN if the parameter is not numeric.

Examples */

console.log(Math.sin(3.14));
console.log(Math.sin(0));
console.log(Math.sin(Math.PI/6));
console.log(Math.sin(Math.PI/2));
console.log(Math.sin(Math.PI));

/* Math.sin(x) expect x in radians.

To use degrees, convert degrees to radians first.*/
function sine(degree) {
      let x = Math.sin(degree * Math.PI / 4);
      return x;   
    }
let radians = sine(45);
console.log("The sine of 45 degrees is: " +radians);
